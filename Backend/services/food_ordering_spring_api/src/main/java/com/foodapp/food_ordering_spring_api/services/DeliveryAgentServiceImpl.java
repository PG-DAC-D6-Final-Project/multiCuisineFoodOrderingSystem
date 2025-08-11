package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.custom_exceptions.ApiException;
import com.foodapp.food_ordering_spring_api.dao.DeliveryAgentDao;
import com.foodapp.food_ordering_spring_api.dao.OrdersDao;
import com.foodapp.food_ordering_spring_api.dto.AddressDto;
import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentLoginDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentOrderDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentRegisterDto;
import com.foodapp.food_ordering_spring_api.entities.DeliveryAgent;
import com.foodapp.food_ordering_spring_api.entities.OrderStatus;
import com.foodapp.food_ordering_spring_api.entities.Orders;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class DeliveryAgentServiceImpl implements DeliveryAgentService {

	private final DeliveryAgentDao deliveryAgentDao;
	private final OrdersDao ordersDao;
	private final ModelMapper modelMapper;

	@Override
	public DeliveryAgentDto deliveryAgentLogin(DeliveryAgentLoginDto dto) {
		DeliveryAgent agent = deliveryAgentDao.findByEmail(dto.getEmail())
				.orElseThrow(() -> new RuntimeException("Invalid email"));

		if (!agent.getPassword().equals(dto.getPassword())) {
			throw new RuntimeException("Invalid password");
		}

		return modelMapper.map(agent, DeliveryAgentDto.class);
	}

	@Override
	public DeliveryAgentDto deliveryAgentRegistration(DeliveryAgentRegisterDto dto) {
		if (deliveryAgentDao.existsByEmail(dto.getEmail())) {
			throw new ApiException("Duplicate Email ");
		}
		DeliveryAgent entity = modelMapper.map(dto, DeliveryAgent.class);

		return modelMapper.map(deliveryAgentDao.save(entity), DeliveryAgentDto.class);
	}


	@Override
	public List<DeliveryAgentOrderDto> getAvailableOrders() {
		List<Orders> orders = ordersDao.findByDeliveryPersonIsNullAndOrderstatus(OrderStatus.PREPARING);
		return orders.stream().map(order -> {
			DeliveryAgentOrderDto dto = new DeliveryAgentOrderDto();
			modelMapper.map(order, DeliveryAgentOrderDto.class);
			AddressDto customerAddressDto = modelMapper.map(order.getUser().getAddress(), AddressDto.class);
			AddressDto restaurantAddressDto = modelMapper.map(order.getRestaurant().getAddress(), AddressDto.class);
			String userName = order.getUser().getFirstName() + " " + order.getUser().getLastName();
			dto.setCustomerAddress(customerAddressDto);
			dto.setRestaurantAddress(restaurantAddressDto);
			dto.setCustomerName(userName);
			dto.setId(order.getId());
			dto.setRestaurantName(order.getRestaurant().getName());
			return dto;
		}).toList();
	}

	@Override
	public ApiResponse acceptOrder(Long orderId, Long deliveryAgentId) {
		Orders order = ordersDao.findById(orderId).orElseThrow(() -> new RuntimeException("Invalid order id."));
		DeliveryAgent agent = deliveryAgentDao.findById(deliveryAgentId).orElseThrow(() -> new RuntimeException("Invalid delivery agent id."));
		order.setDeliveryPerson(agent);
		order.setOrderstatus(OrderStatus.ON_THE_WAY);
		return new ApiResponse("Order accepted.");
	}

	@Override
	public List<DeliveryAgentOrderDto> getActiveOrders(Long deliveryAgentId) {
		DeliveryAgent agent = deliveryAgentDao.findById(deliveryAgentId).orElseThrow(() -> new RuntimeException("Invalid delivery agent id!"));
		List<Orders> orders = ordersDao.findByDeliveryPersonAndOrderstatus(agent, OrderStatus.ON_THE_WAY);
		return orders.stream().map(order -> {
			DeliveryAgentOrderDto dto = new DeliveryAgentOrderDto();
			modelMapper.map(order, DeliveryAgentOrderDto.class);
			AddressDto customerAddressDto = modelMapper.map(order.getUser().getAddress(), AddressDto.class);
			AddressDto restaurantAddressDto = modelMapper.map(order.getRestaurant().getAddress(), AddressDto.class);
			String userName = order.getUser().getFirstName() + " " + order.getUser().getLastName();
			dto.setCustomerAddress(customerAddressDto);
			dto.setRestaurantAddress(restaurantAddressDto);
			dto.setCustomerName(userName);
			dto.setId(order.getId());
			dto.setRestaurantName(order.getRestaurant().getName());
			return dto;
		}).toList();
	}

	@Override
	public ApiResponse deliverOrder(Long orderId) {
		Orders order = ordersDao.findById(orderId).orElseThrow(() -> new RuntimeException("Invalid order id."));
		order.setOrderstatus(OrderStatus.DELIVERED);
		return new ApiResponse("Order delivered.");
	}

	@Override
	public List<DeliveryAgentOrderDto> getOrderHistory(Long deliveryAgentId) {
		DeliveryAgent agent = deliveryAgentDao.findById(deliveryAgentId).orElseThrow(() -> new RuntimeException("Invalid delivery agent id!"));
		List<Orders> orders = ordersDao.findByDeliveryPersonAndOrderstatus(agent, OrderStatus.DELIVERED);
		return orders.stream().map(order -> {
			DeliveryAgentOrderDto dto = new DeliveryAgentOrderDto();
			modelMapper.map(order, DeliveryAgentOrderDto.class);
			AddressDto customerAddressDto = modelMapper.map(order.getUser().getAddress(), AddressDto.class);
			AddressDto restaurantAddressDto = modelMapper.map(order.getRestaurant().getAddress(), AddressDto.class);
			String userName = order.getUser().getFirstName() + " " + order.getUser().getLastName();
			dto.setCustomerAddress(customerAddressDto);
			dto.setRestaurantAddress(restaurantAddressDto);
			dto.setCustomerName(userName);
			dto.setId(order.getId());
			dto.setRestaurantName(order.getRestaurant().getName());
			return dto;
		}).toList();
	}

	@Override
	public DeliveryAgentDto updateDeliveryAgent(Long deliveryAgentId, DeliveryAgentDto dto) {
		DeliveryAgent agent = deliveryAgentDao.findById(deliveryAgentId).orElseThrow(() -> new RuntimeException("Invalid delivery agent id!"));
		modelMapper.map(dto, agent);
		DeliveryAgent updatedAgent = deliveryAgentDao.save(agent);

	    return modelMapper.map(updatedAgent, DeliveryAgentDto.class);
	}


	@Override
	public List<DeliveryAgentDto> getAllDeliveryAgents() {
		List<DeliveryAgent> agents = deliveryAgentDao.findAll();
		return agents.stream()
				.map(agent -> modelMapper.map(agent, DeliveryAgentDto.class))
				.toList();
	}


}

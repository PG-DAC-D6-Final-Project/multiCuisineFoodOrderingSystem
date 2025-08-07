package com.foodapp.food_ordering_spring_api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.dao.MenuItemDao;
import com.foodapp.food_ordering_spring_api.dao.OrderDao;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dao.UserDao;
import com.foodapp.food_ordering_spring_api.dto.CreateNewOrderDto;
import com.foodapp.food_ordering_spring_api.dto.MenuItemDto;
import com.foodapp.food_ordering_spring_api.dto.OrderDto;
import com.foodapp.food_ordering_spring_api.dto.OrderItemDto;
import com.foodapp.food_ordering_spring_api.dto.ReqOrderDto;
import com.foodapp.food_ordering_spring_api.entities.MenuItem;
import com.foodapp.food_ordering_spring_api.entities.OrderItems;
import com.foodapp.food_ordering_spring_api.entities.Orders;
import com.foodapp.food_ordering_spring_api.entities.Restaurant;
import com.foodapp.food_ordering_spring_api.entities.User;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class OrderService {
	
	private final OrderDao orderDao;
	private final UserDao userDao;
	private final RestaurantDao restaurantDao;
	private final MenuItemDao menuItemDao;
	private final ModelMapper modelMapper;
	
	public List<OrderDto> getAllOrders(){
		
//		List<OrderDto> list =  orderDao.findAll().stream()
//		.map((order)->modelMapper.map(order,OrderDto.class))
//		.collect(Collectors.toList());
		
		List<Orders> orderList =  orderDao.findAll();
		
		System.out.println("-------------------------------------------------");

		List<OrderDto> list = orderDao.findAll().stream()
				.map((order)->modelMapper.map(order, OrderDto.class))
				.collect(Collectors.toList());
		return list;
		
	}

	public CreateNewOrderDto createNewOrder(ReqOrderDto orderDto) {
		Long userId = orderDto.getUserId();
		Long restaurantId = orderDto.getRestaurantId();
		
		User userDetails = userDao.findById(userId).orElseThrow(()-> new RuntimeException("Invalid User Id"));
		
		Restaurant restaurant = restaurantDao.findById(restaurantId).orElseThrow(()-> new RuntimeException("Invalid Restaurant Id"));
		
		if(userDetails.getAddress().getId() == null) {
			throw new RuntimeException("User Dont have address");
		}
		
		
		Orders newOrder = new Orders();
		
		modelMapper.map(orderDto,newOrder);
		
		newOrder.setUser(userDetails);
		newOrder.setRestaurant(restaurant);
	
		
		List<OrderItemDto> orderItemDtoList = orderDto.getOrderItems();
		
		// validate menu items belong to restaurant
		
		Set<Long> restaurantMenuIds = restaurant.getMenuItems().stream()
				.map(MenuItem::getId)
				.collect(Collectors.toSet());
		
		List<OrderItems> orderItemsEntities = new ArrayList<>();
		
		
		List<MenuItemDto> userItems = new ArrayList();
		
		for(OrderItemDto itemDto: orderItemDtoList) {
			MenuItem menuItem = menuItemDao.findById(itemDto.getMenuItemId())
					.orElseThrow(()-> new RuntimeException("Menu item with ID: " + itemDto.getMenuItemId() + " not found"));
			OrderItems orderItem = new OrderItems();
	 		orderItem.setMenuItem(menuItem);
	 		orderItem.setQuantity(itemDto.getQuantity());
	 		orderItem.setOrder(newOrder);
	 		
	 		orderItemsEntities.add(orderItem);
	 		
	 		userItems.add(modelMapper.map(menuItem, MenuItemDto.class));
	 		
		}
		
		//convert menuItems to menuItemDto
		
		
		newOrder.setOrderItems(orderItemsEntities);
		
		Orders persistedOrder = orderDao.save(newOrder);

	    CreateNewOrderDto responseOrderDto =  modelMapper.map(persistedOrder, CreateNewOrderDto.class);
	    responseOrderDto.setMenuItems(userItems);
	    
		return responseOrderDto;
	}


}

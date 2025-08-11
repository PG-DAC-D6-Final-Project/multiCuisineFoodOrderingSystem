package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.custom_exceptions.ApiException;
import com.foodapp.food_ordering_spring_api.dao.DeliveryAgentDao;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentLoginDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentRegisterDto;
import com.foodapp.food_ordering_spring_api.entities.DeliveryAgent;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class DeliveryAgentServiceImpl implements DeliveryAgentService {
	private final DeliveryAgentDao deliveryAgentDao;
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
		if(deliveryAgentDao.existsByEmail(dto.getEmail())) {
			throw new ApiException("Duplicate Email ");
		}
		DeliveryAgent entity = modelMapper.map(dto, DeliveryAgent.class);
		
		return modelMapper.map(deliveryAgentDao.save(entity), DeliveryAgentDto.class);
	}

	
	@Override
	public List<DeliveryAgentDto> getAllDeliveryAgents() {
		List<DeliveryAgent> agents = deliveryAgentDao.findAll();
		return agents.stream()
				.map(agent -> modelMapper.map(agent, DeliveryAgentDto.class))
				.toList();
	}
//	@Override
//	public List<OrdersHistoryDto> getOrderHistory(Long deliveryAgentId) {
//		
//		return null;
//	}

}

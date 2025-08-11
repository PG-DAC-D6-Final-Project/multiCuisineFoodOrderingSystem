package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentLoginDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentRegisterDto;

public interface DeliveryAgentService {
	DeliveryAgentDto deliveryAgentLogin(DeliveryAgentLoginDto dto);
	
	DeliveryAgentDto deliveryAgentRegistration(DeliveryAgentRegisterDto dto);
	
	List<DeliveryAgentDto> getAllDeliveryAgents();
	
//	List<OrdersHistoryDto> getOrderHistory(Long deliveryAgentId);
}

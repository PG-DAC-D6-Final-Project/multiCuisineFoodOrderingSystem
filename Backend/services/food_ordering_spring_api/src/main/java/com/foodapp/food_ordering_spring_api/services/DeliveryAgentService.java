package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentLoginDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentOrderDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentRegisterDto;

public interface DeliveryAgentService {
	
	DeliveryAgentDto deliveryAgentLogin(DeliveryAgentLoginDto dto);
	
	DeliveryAgentDto deliveryAgentRegistration(DeliveryAgentRegisterDto dto);
	
	List<DeliveryAgentDto> getAllDeliveryAgents();

	List<DeliveryAgentOrderDto> getAvailableOrders();
	
	ApiResponse acceptOrder(Long orderId, Long deliveryAgentId);
	
	List<DeliveryAgentOrderDto> getActiveOrders(Long deliveryAgentId);
	
	ApiResponse deliverOrder(Long orderId);
	
	List<DeliveryAgentOrderDto> getOrderHistory(Long deliveryAgentId);
	
	DeliveryAgentDto updateDeliveryAgent(Long deliveryAgentId, DeliveryAgentDto dto);

}

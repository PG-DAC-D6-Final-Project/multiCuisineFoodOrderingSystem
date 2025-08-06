package com.foodapp.food_ordering_spring_api.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dao.DeliveryAgentDao;
import com.foodapp.food_ordering_spring_api.entities.DeliveryAgent;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/delivery")
@AllArgsConstructor
public class DeliveryAgentController {
	private final DeliveryAgentDao deliveryDao;
	
	@GetMapping
	public List<DeliveryAgent> getAllDeliveryAgents(){
		return deliveryDao.findAll();
	}
}

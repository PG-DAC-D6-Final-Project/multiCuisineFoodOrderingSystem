package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentLoginDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentRegisterDto;
import com.foodapp.food_ordering_spring_api.services.DeliveryAgentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/delivery")
@AllArgsConstructor
@CrossOrigin("*")
public class DeliveryAgentController {
	private final DeliveryAgentService deliveryAgentService;
	
//	@GetMapping
//	public List<DeliveryAgent> getAllDeliveryAgents(){
//		return deliveryDao.findAll();
//	}
	
	@GetMapping
	public ResponseEntity<?> getAllDeliveryAgents(){
		return ResponseEntity.ok(deliveryAgentService.getAllDeliveryAgents());
	}
	
	@PostMapping("/login")
    public ResponseEntity<?> deliveryAgentLogin(@RequestBody DeliveryAgentLoginDto dto) {
        return ResponseEntity.ok(deliveryAgentService.deliveryAgentLogin(dto));
    }
	
	@PostMapping("/register")
    public ResponseEntity<?> deliveryAgentRegistration(@RequestBody DeliveryAgentRegisterDto dto) {
        return ResponseEntity.ok(deliveryAgentService.deliveryAgentRegistration(dto));
    }
	
	@GetMapping("{deliveryAgentId}")
	public ResponseEntity<?> getOrderHistory(@PathVariable Long deliverAgentId){
		return ResponseEntity.ok(null);
	}
}

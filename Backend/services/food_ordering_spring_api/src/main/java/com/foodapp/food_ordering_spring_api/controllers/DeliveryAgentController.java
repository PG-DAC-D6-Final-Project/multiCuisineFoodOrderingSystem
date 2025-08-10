package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.DeliveryAcceptOrderDto;
import com.foodapp.food_ordering_spring_api.dto.DeliveryAgentDto;
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
	
	@PostMapping("/login")
    public ResponseEntity<?> deliveryAgentLogin(@RequestBody DeliveryAgentLoginDto dto) {
        return ResponseEntity.ok(deliveryAgentService.deliveryAgentLogin(dto));
    }
	
	@PostMapping("/register")
    public ResponseEntity<?> deliveryAgentRegistration(@RequestBody DeliveryAgentRegisterDto dto) {
        return ResponseEntity.ok(deliveryAgentService.deliveryAgentRegistration(dto));
    }
	
	@GetMapping("/availableOrders")
	public ResponseEntity<?> getAvailableOrders(){
		return ResponseEntity.ok(deliveryAgentService.getAvailableOrders());
	}
	
	@PostMapping("/acceptOrder/{orderId}")
	public ResponseEntity<?> acceptOrder(@PathVariable Long orderId, @RequestBody DeliveryAcceptOrderDto dto){
		return ResponseEntity.ok(deliveryAgentService.acceptOrder(orderId, dto.getDeliveryAgentId()));
	}
	
	@GetMapping("/activeOrders/{deliveryAgentId}")
	public ResponseEntity<?> getActiveOrders(@PathVariable Long deliveryAgentId){
		return ResponseEntity.ok(deliveryAgentService.getActiveOrders(deliveryAgentId));
	}
	
	@PostMapping("/deliverOrder/{orderId}")
	public ResponseEntity<?> deliverOrder(@PathVariable Long orderId){
		return ResponseEntity.ok(deliveryAgentService.deliverOrder(orderId));
	}
	
	@GetMapping("/orderHistory/{deliveryAgentId}")
	public ResponseEntity<?> getOrderHistory(@PathVariable Long deliveryAgentId){
		return ResponseEntity.ok(deliveryAgentService.getOrderHistory(deliveryAgentId));
	}
	
	@PutMapping("/{deliveryAgentId}")
	public ResponseEntity<?> updateDeliveryAgent(@PathVariable Long deliveryAgentId,@RequestBody DeliveryAgentDto dto) {
        return ResponseEntity.ok(deliveryAgentService.updateDeliveryAgent(deliveryAgentId, dto));
    }
	
}

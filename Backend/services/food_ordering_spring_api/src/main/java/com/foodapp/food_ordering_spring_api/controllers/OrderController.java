package com.foodapp.food_ordering_spring_api.controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.ReqOrderDto;
import com.foodapp.food_ordering_spring_api.services.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {
	/*
	 * get order by id
	 * create order
	 * get all orders by user id
	 * get all orders by restaurant id
	 * get all orders by delivery person id
	 * change order status 
	 * assign delivery person to order
	 *  
	 * */
	
	private final OrderService orderService;
	
	@GetMapping("")
	public ResponseEntity<?> getAllOrders(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(orderService.getAllOrders());
	}
	
	@PostMapping("")
	public ResponseEntity<?> createOrder(@RequestBody ReqOrderDto orderDto){
		return ResponseEntity.status(HttpStatus.OK)
				.body(orderService.createNewOrder(orderDto));
	}
	

	
}

package com.foodapp.food_ordering_spring_api.controllers;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.ReqOrderDto;
import com.foodapp.food_ordering_spring_api.entities.OrderStatus;
import com.foodapp.food_ordering_spring_api.services.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
@CrossOrigin("*")
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
	 */

	private final OrderService orderService;

	@GetMapping("")
	public ResponseEntity<?> getAllOrders() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(orderService.getAllOrders());
	}

	@PostMapping("")
	public ResponseEntity<?> createOrder(@RequestBody ReqOrderDto orderDto) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(orderService.createNewOrder(orderDto));
	}
	
//	Get all orders by restaurant id.
	@GetMapping("/{restaurantId}")
	public ResponseEntity<?> getOrdersByRestaurant(@PathVariable Long restaurantId){
		return ResponseEntity.ok(orderService.getOrdersByRestaurantId(restaurantId));
	}
	
//	 change order status 
	@PatchMapping("/status")
	public ResponseEntity<?> updateOrderStatus(@RequestBody Map<String, String> request) {
		Long orderId = Long.valueOf(request.get("orderId"));
		OrderStatus status = OrderStatus.valueOf(request.get("status").toUpperCase());
	    return ResponseEntity.ok(orderService.updateOrderStatus(orderId, status));
	}
	
	@GetMapping("/customer/{userId}")
	public ResponseEntity<?> getOrdersByCustomerId(@PathVariable Long userId) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(orderService.getOrdersByCustomerId(userId));

	}
	@GetMapping("/orderCountAndRevenueByRestaurantId/{restaurantId}")
	public ResponseEntity<?> getOrderCountAndRevenueByRestaurantId(@PathVariable Long restaurantId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(orderService.getOrderCountAndRevenueByRestaurantId(restaurantId));
	}

}

package com.foodapp.food_ordering_spring_api.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.foodapp.food_ordering_spring_api.entities.DeliveryAgent;
import com.foodapp.food_ordering_spring_api.entities.OrderStatus;
import com.foodapp.food_ordering_spring_api.entities.PaymentMethod;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDto {
	
	private LocalDateTime delivery_date_time;
	private LocalDateTime order_date_time;
	private double subtotal;
	private double tax_amount;
	private double delivery_fee;
	private double discount_amount;
	private double total_amount;
	private PaymentMethod payment_method;
	private OrderStatus orderstatus;	
	private UserDto user;
	
	private RestaurantSignUpDTO restaurant;

	private List<MenuItemDto> menuItems;

//	private DeliveryAgent deliveryPerson;
}



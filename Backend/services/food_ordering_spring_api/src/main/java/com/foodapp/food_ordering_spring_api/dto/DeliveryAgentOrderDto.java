package com.foodapp.food_ordering_spring_api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeliveryAgentOrderDto extends BaseDTO {
	private AddressDto restaurantAddress;
	private AddressDto customerAddress;
	private String customerName;
	private String restaurantName;
}

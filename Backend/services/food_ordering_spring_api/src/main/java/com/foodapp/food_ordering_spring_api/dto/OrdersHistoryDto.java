package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.OrderStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class OrdersHistoryDto extends BaseDTO {
	private OrderStatus orderstatus;
	private AddressDto toAddress;
	private AddressDto fromAddress;
}

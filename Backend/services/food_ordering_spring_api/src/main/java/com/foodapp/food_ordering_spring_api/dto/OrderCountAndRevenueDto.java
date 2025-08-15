package com.foodapp.food_ordering_spring_api.dto;

import lombok.Data;

@Data
public class OrderCountAndRevenueDto {

	private int orderCount;
	
	private Long revenue;
}

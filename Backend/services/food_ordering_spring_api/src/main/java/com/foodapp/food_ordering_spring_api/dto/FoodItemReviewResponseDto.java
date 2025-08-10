package com.foodapp.food_ordering_spring_api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class FoodItemReviewResponseDto {
	
	private Long id;
    private Long menuItemId;
    private String menuItemName;
    private byte rating;
    private String comment;
    private Long orderId;
}
	


package com.foodapp.food_ordering_spring_api.dto;

import lombok.Data;

@Data
public class ReviewDto {

		private Long userId;
	    private Long orderId;
	    private byte rating;
	    private String comment;
	
}

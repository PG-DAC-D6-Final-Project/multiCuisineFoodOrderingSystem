package com.foodapp.food_ordering_spring_api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class MenuItemRatingDto {
	
	private Long menuItemId;
	private byte ItemRating;
}

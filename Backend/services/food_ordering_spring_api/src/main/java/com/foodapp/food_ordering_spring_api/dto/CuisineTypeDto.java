package com.foodapp.food_ordering_spring_api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
public class CuisineTypeDto {
	private Long id;
	private String name;
	private String Description;
}

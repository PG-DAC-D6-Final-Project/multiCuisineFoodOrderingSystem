package com.foodapp.food_ordering_spring_api.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto extends BaseDTO{
	
	
	private String addressLine1;
	
	
	private String addressLine2;
	
	private String city;
	
	private String state;
	
	private String country;
	
	
	private String pinCode;
	
}

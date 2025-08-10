package com.foodapp.food_ordering_spring_api.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto extends BaseDTO{
	
	
	    private Long userId;
	    private String comment;
	  
	    private Long orderId;
	    
	    List<MenuItemRatingDto> listOfItemRating ;

	   

}

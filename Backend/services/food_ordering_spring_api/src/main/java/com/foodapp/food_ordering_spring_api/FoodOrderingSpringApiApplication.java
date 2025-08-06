package com.foodapp.food_ordering_spring_api;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FoodOrderingSpringApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodOrderingSpringApiApplication.class, args);
	}
	
	@Bean
	//@Bean method level annotation to tell SC,following controller return object which has to be managed as spring bean 
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration()
		
		/*To tell ModelMapper to map only those properties whose names match in src and dest*/
		.setMatchingStrategy(MatchingStrategies.STRICT)
		
		/*To tell ModelMapper not to transefer nulls from src -> dest*/
		.setPropertyCondition(Conditions.isNotNull());
		
		return mapper;
	}

}

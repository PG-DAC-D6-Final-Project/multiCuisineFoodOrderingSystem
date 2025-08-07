package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.Restaurant;
import com.foodapp.food_ordering_spring_api.entities.RestaurantStatus;

public interface RestaurantDao extends JpaRepository<Restaurant, Long>{
	boolean existsByName(String restaurantName);
	
	Optional<Restaurant> findByEmailAndPassword(String email, String password);
	List<Restaurant> findByStatus(RestaurantStatus status);
}

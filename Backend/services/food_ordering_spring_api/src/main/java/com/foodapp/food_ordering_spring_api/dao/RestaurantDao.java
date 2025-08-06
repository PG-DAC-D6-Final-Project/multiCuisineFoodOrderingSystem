package com.foodapp.food_ordering_spring_api.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.Restaurant;

public interface RestaurantDao extends JpaRepository<Restaurant, Long>{
	boolean existsByName(String restaurantName);
	
	Optional<Restaurant> findByEmailAndPassword(String email, String password);
}

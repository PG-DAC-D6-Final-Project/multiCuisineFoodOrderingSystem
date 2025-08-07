package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.MenuItem;

public interface MenuItemDao extends JpaRepository<MenuItem, Long> {
	
	List<MenuItem> findByRestaurantId(Long restaurantId);
	
	List<MenuItem> findByCuisineTypeId(Long cuisineTypeId);
	
}

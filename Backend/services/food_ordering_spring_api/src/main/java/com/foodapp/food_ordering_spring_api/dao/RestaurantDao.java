package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.foodapp.food_ordering_spring_api.entities.Restaurant;
import com.foodapp.food_ordering_spring_api.entities.RestaurantStatus;

public interface RestaurantDao extends JpaRepository<Restaurant, Long>{
	boolean existsByName(String restaurantName);
	
	Optional<Restaurant> findByEmailAndPassword(String email, String password);
	List<Restaurant> findByStatus(RestaurantStatus status);
	Page<Restaurant> findByStatus(RestaurantStatus status,Pageable pageable);
	@Query("select r from Restaurant r left join fetch r.menuItems where r.id=:restaurantId")
	Optional<Restaurant> fetchRestaurantMenu(Long restaurantId);
	
	boolean existsByEmail(String email);
}

package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.FoodItemReview;

public interface FoodItemsReviewDao extends JpaRepository<FoodItemReview,Long>{
	
	
	List<FoodItemReview> findByUserId(Long userId);
}

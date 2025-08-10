package com.foodapp.food_ordering_spring_api.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.FoodItemReview;

public interface FoodItemsReviewDao extends JpaRepository<FoodItemReview,Long>{
	

}

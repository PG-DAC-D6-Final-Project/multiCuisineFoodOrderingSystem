package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.FoodItemReview;
import com.foodapp.food_ordering_spring_api.entities.Orders;
import com.foodapp.food_ordering_spring_api.entities.Reviews;
import com.foodapp.food_ordering_spring_api.entities.User;

public interface FoodItemsReviewDao extends JpaRepository<Reviews,Long>{
	
	
	List<Reviews> findByUserId(Long userId);
	
	boolean existsByUserAndOrder(User user, Orders order);
}

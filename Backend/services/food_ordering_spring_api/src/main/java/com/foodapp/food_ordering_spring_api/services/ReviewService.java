package com.foodapp.food_ordering_spring_api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.custom_exceptions.ResourceNotFoundException;
import com.foodapp.food_ordering_spring_api.dao.FoodItemsReviewDao;
import com.foodapp.food_ordering_spring_api.dao.MenuItemDao;
import com.foodapp.food_ordering_spring_api.dao.OrderDao;
import com.foodapp.food_ordering_spring_api.dao.UserDao;
import com.foodapp.food_ordering_spring_api.dto.MenuItemRatingDto;
import com.foodapp.food_ordering_spring_api.dto.ReviewDto;
import com.foodapp.food_ordering_spring_api.dto.FoodItemReviewDto;
import com.foodapp.food_ordering_spring_api.dto.FoodItemReviewResponseDto;
import com.foodapp.food_ordering_spring_api.entities.FoodItemReview;
import com.foodapp.food_ordering_spring_api.entities.MenuItem;
import com.foodapp.food_ordering_spring_api.entities.Orders;
import com.foodapp.food_ordering_spring_api.entities.Reviews;
import com.foodapp.food_ordering_spring_api.entities.User;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class ReviewService {
	
	private final FoodItemsReviewDao reviewDao;
	
	private final OrderDao orderDao;
	private final MenuItemDao menuItemDao;
	private final UserDao userDao;
	
	
	public void addReview(ReviewDto reviewDto) {
		Long userId = reviewDto.getUserId();
	    Long orderId = reviewDto.getOrderId();

	    User user = userDao.findById(userId)
	        .orElseThrow(() -> new ResourceNotFoundException("User with id: " + userId + " not found"));

	    Orders order = orderDao.findById(orderId)
	        .orElseThrow(() -> new ResourceNotFoundException("Order with id: " + orderId + " not found"));

	  
	    if (!order.getUser().getId().equals(userId)) {
	        throw new ResourceNotFoundException("Order does not belong to user: " + userId);
	    }

	   
	    if (reviewDao.existsByUserAndOrder(user, order)) {
	        throw new ResourceNotFoundException("Review already exists for this order and user");
	    }

	    Reviews  review = new Reviews ();
	    review.setUser(user);
	    review.setOrder(order);
	    review.setRating(reviewDto.getRating());
	    review.setComment(reviewDto.getComment());

	    reviewDao.save(review);
	}

}

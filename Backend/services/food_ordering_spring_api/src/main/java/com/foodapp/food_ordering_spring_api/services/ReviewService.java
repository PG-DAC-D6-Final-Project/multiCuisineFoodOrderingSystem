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
import com.foodapp.food_ordering_spring_api.entities.FoodItemReview;
import com.foodapp.food_ordering_spring_api.entities.MenuItem;
import com.foodapp.food_ordering_spring_api.entities.Orders;
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

	public void addReview(ReviewDto review) {
		Long userId = review.getUserId();
		Long orderId = review.getOrderId();
		List<MenuItemRatingDto> itemsRatingList = review.getListOfItemRating();
 		// Check User Id 
		User userInfo = userDao.findById(userId)
		.orElseThrow(()->new ResourceNotFoundException("user with id :"+userId+ " not found"));
		
		//Check Order Id
		Orders orderInfo = orderDao.findById(orderId)
		.orElseThrow(()->new ResourceNotFoundException("Order with order Id : "+orderId+" not Found"));
		
		List<Long> listOfItemsInPersistOrder = orderInfo.getOrderItems().stream()
				.map((orderItem)->orderItem.getMenuItem().getId())
				.collect(Collectors.toList());
		
		List<FoodItemReview> listOfReviews = new ArrayList<>();
		for(MenuItemRatingDto menuItemRating:itemsRatingList) {
			 
			MenuItem menuItem = menuItemDao.findById(menuItemRating.getMenuItemId())
					.orElseThrow(()->new ResourceNotFoundException("Menuitem with Id : "+ menuItemRating.getMenuItemId()+" not Found" ));
			if(!listOfItemsInPersistOrder.contains( menuItem.getId())) {
				throw new ResourceNotFoundException("Menu Item with id : " +menuItem.getId()+" not belong to order :"+orderInfo.getId());
			}
			FoodItemReview foodItemReview = new FoodItemReview();
			foodItemReview.setUser(userInfo);
			foodItemReview.setOrder(orderInfo);
			foodItemReview.setComment(review.getComment());
			foodItemReview.setMenuItem(menuItem);
			foodItemReview.setRating(menuItemRating.getItemRating());
			
			reviewDao.save(foodItemReview);
		}
		
		
	}
	
}

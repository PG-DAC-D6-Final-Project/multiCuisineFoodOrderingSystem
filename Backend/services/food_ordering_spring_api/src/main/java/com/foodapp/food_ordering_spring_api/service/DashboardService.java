package com.foodapp.food_ordering_spring_api.service;

import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.dao.OrderDao;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dao.UserDao;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service 
@Transactional
@AllArgsConstructor
public class DashboardService {
	private final OrderDao orderDao;
	private final UserDao userDao;
	private final RestaurantDao restaurantDao;
	
	public Object getData() {
		int userCount = userDao.findAll().size();
		int ordersCount = orderDao.findAll().size();
//		int restaurantCount = restaurantDao.findAll();
		return null;
	}
	
	

}

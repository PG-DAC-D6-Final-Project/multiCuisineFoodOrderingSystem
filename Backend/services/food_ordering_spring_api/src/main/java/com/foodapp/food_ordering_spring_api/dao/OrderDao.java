package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.foodapp.food_ordering_spring_api.entities.Orders;

public interface OrderDao extends JpaRepository<Orders,Long> {

	@Query("SELECT o FROM Orders o WHERE o.restaurant.id = :restaurantId " +
		       "ORDER BY CASE WHEN o.orderstatus = 'PREPARING' THEN 0 ELSE 1 END, o.order_date_time DESC")
		List<Orders> findOrdersByRestaurantIdSorted(@Param("restaurantId") Long restaurantId);
	
//	@Query("SELECT DISTINCT o FROM Orders o " +
//		       "LEFT JOIN FETCH o.orderItems oi " +
//		       "LEFT JOIN FETCH oi.menuItem mi " +
//		       "WHERE o.restaurant.id = :restaurantId " +
//		       "ORDER BY CASE WHEN o.orderstatus = 'PREPARING' THEN 0 ELSE 1 END, o.order_date_time DESC")
//		List<Orders> findOrdersWithItemsByRestaurantId(@Param("restaurantId") Long restaurantId);

	
}

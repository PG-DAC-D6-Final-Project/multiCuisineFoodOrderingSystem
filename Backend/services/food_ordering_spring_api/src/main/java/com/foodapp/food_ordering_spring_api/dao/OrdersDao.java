package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.foodapp.food_ordering_spring_api.entities.DeliveryAgent;
import com.foodapp.food_ordering_spring_api.entities.OrderStatus;
import com.foodapp.food_ordering_spring_api.entities.Orders;

public interface OrdersDao extends JpaRepository<Orders, Long> {
	

	@Query("SELECT COUNT(O) FROM Orders O WHERE O.restaurant.id = :restaurantId")
	int countOrdersByRestaurantId(@Param("restaurantId")Long restaurantId);
	
	@Query("SELECT SUM(O.total_amount) FROM Orders O WHERE O.restaurant.id =:restaurantId")
	Long getTotalRevenueByRestaurantId(@Param("restaurantId") Long restaurantId); 

	List<Orders> findByDeliveryPersonIsNull();
	
	List<Orders> findByDeliveryPersonIsNullAndOrderstatus(OrderStatus status);
	
	List<Orders> findByDeliveryPersonAndOrderstatus(DeliveryAgent deliveryAgent, OrderStatus status);


}

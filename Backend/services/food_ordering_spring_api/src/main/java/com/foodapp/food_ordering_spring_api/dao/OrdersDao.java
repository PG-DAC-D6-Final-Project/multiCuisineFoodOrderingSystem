package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.DeliveryAgent;
import com.foodapp.food_ordering_spring_api.entities.OrderStatus;
import com.foodapp.food_ordering_spring_api.entities.Orders;

public interface OrdersDao extends JpaRepository<Orders, Long> {
	
	List<Orders> findByDeliveryPersonIsNull();
	
	List<Orders> findByDeliveryPersonIsNullAndOrderstatus(OrderStatus status);
	
	List<Orders> findByDeliveryPersonAndOrderstatus(DeliveryAgent deliveryAgent, OrderStatus status);

}

package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.OrderItems;

public interface OrderItemsDao extends JpaRepository<OrderItems, Long> {

	List<OrderItems> findByOrderId(Long orderId);
}

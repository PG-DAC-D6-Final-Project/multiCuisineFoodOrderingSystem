package com.foodapp.food_ordering_spring_api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.Orders;

public interface OrderDao extends JpaRepository<Orders,Long> {

	List<Orders> findByUserId(Long userId);
}

package com.foodapp.food_ordering_spring_api.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.DeliveryAgent;

public interface DeliveryAgentDao extends JpaRepository<DeliveryAgent, Long> {
    Optional<DeliveryAgent> findByEmail(String email);
    boolean existsByEmail(String email);
}

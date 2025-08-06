package com.foodapp.food_ordering_spring_api.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.CuisineType;

public interface CuisineTypeDao extends JpaRepository<CuisineType, Long> {

}

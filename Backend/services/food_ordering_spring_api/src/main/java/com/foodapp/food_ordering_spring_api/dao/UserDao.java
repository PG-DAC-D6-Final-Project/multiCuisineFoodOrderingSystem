package com.foodapp.food_ordering_spring_api.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.food_ordering_spring_api.entities.User;

public interface UserDao extends JpaRepository<User, Long>{
	Optional<User> findByEmailAndPassword(String email, String password);
	boolean existsByEmail(String email);
}

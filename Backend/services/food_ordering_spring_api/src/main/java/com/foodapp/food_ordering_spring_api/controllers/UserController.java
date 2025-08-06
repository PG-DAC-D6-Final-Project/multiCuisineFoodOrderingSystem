package com.foodapp.food_ordering_spring_api.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dao.UserDao;
import com.foodapp.food_ordering_spring_api.dto.UserDto;
import com.foodapp.food_ordering_spring_api.entities.User;
import com.foodapp.food_ordering_spring_api.services.UserService;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
	
	
	private final UserDao userDao;
	private final UserService userService;
	
	@GetMapping("")
	public List<User> getAllUser(){
		
		return userDao.findAll();
	}
	
	
	@PostMapping("")
	public ResponseEntity<?> userRegistration(@RequestBody UserDto userdto){
		System.out.println(userdto);
		return ResponseEntity.status(HttpStatus.CREATED)
		.body(userService.registerUser(userdto));
	}

	
}

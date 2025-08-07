package com.foodapp.food_ordering_spring_api.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dao.UserDao;
import com.foodapp.food_ordering_spring_api.dto.AddressDto;
import com.foodapp.food_ordering_spring_api.dto.UserDto;
import com.foodapp.food_ordering_spring_api.dto.UserLoginDto;
import com.foodapp.food_ordering_spring_api.entities.User;
import com.foodapp.food_ordering_spring_api.services.UserService;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/user")
@AllArgsConstructor
@CrossOrigin("*")
public class UserController {
	
	
	private final UserDao userDao;
	private final UserService userService;
	
	@GetMapping("")
	public List<User> getAllUser(){
		
		return userDao.findAll();
	}
	
	
	@PostMapping("")
	public ResponseEntity<?> userregistration(@RequestBody UserDto userdto){
		System.out.println(userdto);
		UserDto user = userService.registerUser(userdto);
		return ResponseEntity.status(HttpStatus.CREATED)
		.body(user);
	}
	
	@PutMapping("update-address/{userId}")
	public ResponseEntity<?> updateAddress(@PathVariable Long userId,@RequestBody AddressDto addressDto){
		System.out.println(userId);
		return ResponseEntity.status(HttpStatus.OK)
				.body( userService.updateAddress(userId,addressDto));
	}

	@PutMapping("update-user-details/{userId}")
	public ResponseEntity<?> updateUserDetails(@PathVariable Long userId, @RequestBody UserDto userDto){
		return ResponseEntity.status(HttpStatus.OK)
				.body(userService.updateUserDetails(userId,userDto));
	}
	
	@PostMapping("login")
	public ResponseEntity<?> login(@RequestBody UserLoginDto userLoginDetail){
		return ResponseEntity.status(HttpStatus.OK)
				.body(userService.login(userLoginDetail));
	}
 	
}

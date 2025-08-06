package com.foodapp.food_ordering_spring_api.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.custom_exceptions.ApiException;
import com.foodapp.food_ordering_spring_api.dao.UserDao;
import com.foodapp.food_ordering_spring_api.dto.AddressDto;
import com.foodapp.food_ordering_spring_api.dto.UserDto;
import com.foodapp.food_ordering_spring_api.entities.Address;
import com.foodapp.food_ordering_spring_api.entities.User;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class UserService {
	private final UserDao userDao;
	private final ModelMapper modelMapper;
	
	
	public UserDto registerUser(UserDto reqDto) {
		if(userDao.existsByEmail(reqDto.getEmail())) {
			throw new ApiException("Duplicate Email ");
		}
		User entity = modelMapper.map(reqDto, User.class);
		
		return modelMapper.map(userDao.save(entity), UserDto.class);
	}
	
	public AddressDto updateAddress(Long userId,AddressDto addressDto) {
	
			User persistUser = userDao.findById(userId)
					.orElseThrow(()-> new RuntimeException("User not found with id :"+userId));
			
			persistUser.setAddress(modelMapper.map(addressDto, Address.class));
			
			User updateUser = userDao.save(persistUser);
			
			return modelMapper.map(updateUser.getAddress(),AddressDto.class);
				
		
	}
}

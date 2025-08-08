
package com.foodapp.food_ordering_spring_api.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.foodapp.food_ordering_spring_api.controllers.DummyController;
import com.foodapp.food_ordering_spring_api.custom_exceptions.ApiException;
import com.foodapp.food_ordering_spring_api.custom_exceptions.ResourceNotFoundException;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dto.AllRestaurantDto;
import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.MenuItemDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantByIdDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantLoginDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantMenuDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantMenuItemDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;
import com.foodapp.food_ordering_spring_api.dto.UpdateRestaurantDto;
import com.foodapp.food_ordering_spring_api.entities.MenuItem;
import com.foodapp.food_ordering_spring_api.entities.Restaurant;
import com.foodapp.food_ordering_spring_api.entities.RestaurantStatus;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {
	
	private final RestaurantDao restaurantDao;
	private final ModelMapper modelMapper;
	
	@Override
	public ApiResponse restaurantSignUp(RestaurantSignUpDTO dto) {
		if(restaurantDao.existsByName(dto.getName())) {
			throw new ApiException("Restaurant Already Exists...");
		}
		if(restaurantDao.existsByEmail(dto.getEmail())) {
			throw new ApiException("Restaurant Email Already Exists...");
		}
			
		Restaurant entity = modelMapper.map(dto,Restaurant.class);
		entity.setStatus(RestaurantStatus.ACTIVE);
		entity.setMinimum_order_amount(100);
		Restaurant persistentRestaurant = restaurantDao.save(entity);
		return new ApiResponse("Added new Restaurant with ID = " + persistentRestaurant.getId());
	}

//	restaurant login function 
	@Override
    public RestaurantSignUpDTO restaurantLogin(RestaurantLoginDto dto) {
        Restaurant  restaurant = restaurantDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
        		.orElseThrow(()->new RuntimeException("Invalid Email or password"));
        return modelMapper.map(restaurant, RestaurantSignUpDTO.class);
    }

	
	@Override
	public RestaurantByIdDto getRestaurantById(Long restaurantId) {
		Restaurant entity = restaurantDao.findById(restaurantId).orElseThrow(() -> new ResourceNotFoundException("Invalid restaurant id!"));
		if(entity.getStatus() != RestaurantStatus.ACTIVE)
			throw new ResourceNotFoundException("Restaurant isn't available at the moment...");
		return modelMapper.map(entity,RestaurantByIdDto.class);
	}

	@Override
	public ApiResponse UpdateRestaurant(Long id, UpdateRestaurantDto dto) {
		if(restaurantDao.existsByName(dto.getName()))
			throw new ApiException("restaurant already exists by this name...");
		Restaurant entity = restaurantDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("invalid restaurant id"));
		modelMapper.map(dto, entity);
		return new ApiResponse("updated restaurant details!");
	}
	
	@Override
	public List<AllRestaurantDto> getAllRestaurant() {
		return restaurantDao.findByStatus(RestaurantStatus.ACTIVE)
				.stream()
				.map(restaurant -> modelMapper.map(restaurant, AllRestaurantDto.class)).toList();
	}

	@Override
	public ApiResponse deleteRestaurantDetail(Long restaurantId) {
		Restaurant entity = restaurantDao.findById(restaurantId)
									  .orElseThrow(() -> new ResourceNotFoundException("Invalid restaurant id...."));
		
		entity.setStatus(RestaurantStatus.INACTIVE);
		restaurantDao.save(entity);
		return new ApiResponse("restaurant deleted");		
	}

	@Override
	public RestaurantMenuDto getRestaurantMenu(Long Id) {
		Restaurant entity = restaurantDao.fetchRestaurantMenu(Id).orElseThrow(() -> new ResourceNotFoundException("No such restaurant present"));
		
		RestaurantMenuDto dto = new RestaurantMenuDto();
		dto.setId(entity.getId());
		dto.setName(entity.getName());
		dto.setAddress(entity.getAddress());
		
		List<RestaurantMenuItemDto> items = new ArrayList<>();
		for(MenuItem menuitem : entity.getMenuItems()) {
			RestaurantMenuItemDto itemDto = new RestaurantMenuItemDto();
			itemDto.setId(menuitem.getId());
			itemDto.setName(menuitem.getName());
			itemDto.setDescription(menuitem.getDescription());
			itemDto.setPrice(menuitem.getPrice());
			itemDto.setImage_url(menuitem.getImage_url());
//			itemDto.setCuisineType(menuitem.getCuisineType());
			itemDto.setAvailability_status(menuitem.getAvailability_status());
			
			// Get cuisine type name safely
	        if (menuitem.getCuisineType() != null) {
	            itemDto.setCuisineType(menuitem.getCuisineType().getName());
	        }
	        
			items.add(itemDto);
		}
		dto.setMenuItems(items);
		System.out.println(dto);
		return dto;
		
	}

	@Override
	public ApiResponse restaurantSignin(RestaurantLoginDto dto) {
		boolean exists = restaurantDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword()).isPresent();
		if(exists)
			return new ApiResponse("Restaurant Login successful...");
		else
			return new ApiResponse("invalid email or password");
	}
}


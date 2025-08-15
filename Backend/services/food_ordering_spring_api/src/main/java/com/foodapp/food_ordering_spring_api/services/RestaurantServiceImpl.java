
package com.foodapp.food_ordering_spring_api.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.custom_exceptions.ApiException;
import com.foodapp.food_ordering_spring_api.custom_exceptions.ResourceNotFoundException;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dto.AllRestaurantDto;
import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.RestaurantByIdDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantLoginDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantMenuDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantMenuItemDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;
import com.foodapp.food_ordering_spring_api.dto.UpdateRestaurantDto;
import com.foodapp.food_ordering_spring_api.entities.Address;
import com.foodapp.food_ordering_spring_api.entities.MenuItem;
import com.foodapp.food_ordering_spring_api.entities.Restaurant;
import com.foodapp.food_ordering_spring_api.entities.RestaurantStatus;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {
	
	private final RestaurantDao restaurantDao;
	private final ModelMapper modelMapper;
	private final PasswordEncoder passwordEncoder;
	
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
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
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
//		if(entity.getStatus() != RestaurantStatus.ACTIVE)
//			throw new ResourceNotFoundException("Restaurant isn't available at the moment...");
		return modelMapper.map(entity,RestaurantByIdDto.class);
	}

	@Override
	public ApiResponse UpdateRestaurant(Long id, UpdateRestaurantDto dto) {
		Restaurant entity = restaurantDao.findById(id)
		        .orElseThrow(() -> new ResourceNotFoundException("invalid restaurant id"));

		    if (!entity.getName().equals(dto.getName()) && restaurantDao.existsByName(dto.getName())) {
		        throw new ApiException("restaurant already exists by this name...");
		    }
		    
		    entity.setName(dto.getName());
		    entity.setPhone(dto.getPhone());
		    entity.setEmail(dto.getEmail());
		    entity.setPassword(dto.getPassword());
		    entity.setOpening_time(dto.getOpening_time());
		    entity.setClosing_time(dto.getClosing_time());
		    entity.setMinimum_order_amount(dto.getMinimum_order_amount());
		    entity.setStatus(dto.getStatus());

		    
		    if (dto.getAddress() != null) {
		        Address addr = entity.getAddress();
		        if (addr == null) {
		            addr = new Address();
		            entity.setAddress(addr);
		        }
		        addr.setAddressLine1(dto.getAddress().getAddressLine1());
		        addr.setAddressLine2(dto.getAddress().getAddressLine2());
		        addr.setCity(dto.getAddress().getCity());
		        addr.setState(dto.getAddress().getState());
		        addr.setCountry(dto.getAddress().getCountry());
		        addr.setPinCode(dto.getAddress().getPinCode());
		    }

		    restaurantDao.save(entity);
		    return new ApiResponse("updated restaurant details!");
		
	}
	
	@Override
	public List<AllRestaurantDto> getAllRestaurant(int limit) {
		 Pageable  pageable = PageRequest.of(0, limit);
		return restaurantDao.findByStatus(RestaurantStatus.ACTIVE,pageable)
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

//	public ApiResponse restaurantSignin(RestaurantLoginDto dto) {
//		boolean exists = restaurantDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword()).isPresent();
//		if(exists)
//			return new ApiResponse("Restaurant Login successful...");
//		else
//			return new ApiResponse("invalid email or password");
//	}
	
	public Map<String, Object> restaurantSignin(RestaurantLoginDto dto) {
	    Map<String, Object> response = new HashMap<>();

	    // Fetch restaurant entity
	    Optional<Restaurant> restaurantOpt = restaurantDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword());

	    if (restaurantOpt.isPresent()) {
	        Restaurant restaurant = restaurantOpt.get();

	        response.put("message", "Restaurant Login successful...");
	        response.put("restaurantId", restaurant.getId()); // ✅ Send ID to frontend
	    } else {
	        response.put("message", "Invalid email or password");
	    }

	    return response;
	}
	
	public List<AllRestaurantDto> getAll(){
		return restaurantDao.findAll()
				.stream()
				.map((restaurant)-> modelMapper.map(restaurant, AllRestaurantDto.class))
				.collect(Collectors.toList());
	}
	
	public void changeStatusToSuspended(Long restaurantId) {
		Restaurant restaurant = restaurantDao.findById(restaurantId)
		.orElseThrow(()-> new ResourceNotFoundException("No such restaurant with id : "+restaurantId) );
		
		restaurant.setStatus(RestaurantStatus.SUSPENDED);
		restaurantDao.save(restaurant);
		
	}
	
	public int getTotalCount() {
		return restaurantDao.findAll().size();
	}

	@Override
	public List<AllRestaurantDto> getPendingRestaurant() {
		List<Restaurant> list =  restaurantDao.findByStatus(RestaurantStatus.PENDING);
		
		return list.stream().map((restraunt)->modelMapper.map(restraunt, AllRestaurantDto.class))
		.collect(Collectors.toList());
		
		
		
	}
	
	


}


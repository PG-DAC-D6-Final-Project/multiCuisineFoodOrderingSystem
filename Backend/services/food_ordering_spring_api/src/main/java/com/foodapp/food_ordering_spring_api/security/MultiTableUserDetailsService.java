package com.foodapp.food_ordering_spring_api.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.dao.DeliveryAgentDao;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dao.UserDao;
import com.foodapp.food_ordering_spring_api.entities.Role;

@Service
public class MultiTableUserDetailsService implements UserDetailsService {

	private final UserDao userRepo;
	private final RestaurantDao restaurantRepo;
	private final DeliveryAgentDao deliveryRepo;

	public MultiTableUserDetailsService(UserDao userRepo, RestaurantDao restaurantRepo, DeliveryAgentDao deliveryRepo) {
		this.userRepo = userRepo;
		this.restaurantRepo = restaurantRepo;
		this.deliveryRepo = deliveryRepo;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		return userRepo.findByEmail(email)
				.map(u -> new CustomUserDetails(u.getId(), u.getEmail(), u.getPassword(), Role.CUSTOMER))
				.or(() -> restaurantRepo.findByEmail(email)
						.map(r -> new CustomUserDetails(r.getId(), r.getEmail(), r.getPassword(), Role.RESTAURANT)))
				.or(() -> deliveryRepo.findByEmail(email)
						.map(d -> new CustomUserDetails(d.getId(), d.getEmail(), d.getPassword(), Role.DELIVERY_AGENT)))
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));
	}
}

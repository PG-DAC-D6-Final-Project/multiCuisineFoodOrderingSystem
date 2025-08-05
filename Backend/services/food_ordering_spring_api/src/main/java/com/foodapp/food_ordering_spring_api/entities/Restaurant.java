package com.foodapp.food_ordering_spring_api.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="restaurants")
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Restaurant {
	@Column(unique = true, length=50)
	private String name;
	@Column(length = 500)
	private String address;
	@Column(length = 11)
	private String phone;
	@Column(length = 100)
	private String email;
	@Column(name="average_rating")
	private double avg_rating;
	private double minimum_order_amount;
//	private int cuisine_type; foreign key from cuisine table
	private RestaurantStatus status; 
	private LocalDateTime opening_time;
	private LocalDateTime closing_time;
//	private IMAGE_URL;
//	OneToMany with items
}

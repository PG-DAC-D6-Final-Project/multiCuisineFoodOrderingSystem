package com.foodapp.food_ordering_spring_api.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Menu_Items")
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class MenuItem extends BaseEntity{
	
	@Column(length = 30)
	private String name;
	@Column(length = 300)
	private String description;
	private double price;
//	private int cuisine_id; foreign key from cuisine table
//	private IMAGE_URL;
	private RestaurantMenuItemAvailability availability_status;
	
}
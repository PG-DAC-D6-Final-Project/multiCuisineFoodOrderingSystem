package com.foodapp.food_ordering_spring_api.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "restaurants")
@NoArgsConstructor
@Getter
@Setter
@ToString

@EqualsAndHashCode
public class Restaurant extends BaseEntity {
	@Column(unique = true, length = 50)

	private String name;
	@OneToOne(cascade = CascadeType.ALL, optional = false,orphanRemoval = true)
	@JoinColumn(nullable = false, name = "address_id")
	private Address address;
	@Column(length = 11)
	private String phone;
	@Column(length = 100)
	private String email;
	@Column(length = 255)
	private String password;
	@Column(name="average_rating")
	private double avg_rating;
	private double minimum_order_amount;
	@Enumerated(EnumType.STRING)
	private RestaurantStatus status;
	private LocalDateTime opening_time;
	private LocalDateTime closing_time;
	private String image_url;

	@OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
	private List<Orders> orders = new ArrayList<>();
	@OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
	private List<MenuItem> menuItems = new ArrayList<>();

	public void addMenuItem(MenuItem menuItem) {
		this.menuItems.add(menuItem);
		menuItem.setRestaurant(this);
	}

	
	public void removeMenuItem(MenuItem menuItem) {
		this.menuItems.remove(menuItem);
		menuItem.setRestaurant(null);
	}
	

}

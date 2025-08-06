package com.foodapp.food_ordering_spring_api.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
	private String image_url;
	@Enumerated(EnumType.STRING)
	private RestaurantMenuItemAvailability availability_status;
	@OneToMany(mappedBy = "menuItem",cascade = CascadeType.ALL)
	private List<OrderItems> orderItems = new ArrayList<>();
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "restaurant_id", nullable = false)
	private Restaurant restaurant;
}
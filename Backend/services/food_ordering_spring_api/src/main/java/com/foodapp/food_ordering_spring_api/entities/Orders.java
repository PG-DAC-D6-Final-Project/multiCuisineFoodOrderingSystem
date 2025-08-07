package com.foodapp.food_ordering_spring_api.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Setter
@Getter
@ToString

@EqualsAndHashCode
public class Orders extends BaseEntity {
//	private delivery_personnel deliveryGuy_id; foreign key from delivery_personnel table
	private LocalDateTime delivery_date_time;
	private LocalDateTime order_date_time;
	private double subtotal;
	private double tax_amount;
	private double delivery_fee;
	private double discount_amount;
	private double total_amount;

	@Enumerated(EnumType.STRING)
	private PaymentMethod payment_method;
	@Enumerated(EnumType.STRING)
	private OrderStatus orderstatus;	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id",nullable = false)
	private User user;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "restaurant_id", nullable = false)
	private Restaurant restaurant;
	@JsonIgnore
	@OneToMany(mappedBy = "order",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<OrderItems> orderItems = new ArrayList<>();
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "delivery_person_id")
	private DeliveryAgent deliveryPerson;

}

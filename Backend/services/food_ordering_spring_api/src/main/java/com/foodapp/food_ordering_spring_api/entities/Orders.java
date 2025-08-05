package com.foodapp.food_ordering_spring_api.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
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
public class Orders {
//	private User user_id;//foreign key from user table
	private Restaurant restaurant_id; // foreign key from restaurant table
//	private delivery_personnel deliveryGuy_id; foreign key from delivery_personnel table
	private LocalDateTime delivery_date_time;
	private LocalDateTime order_date_time;
	private double subtotal;
	private double tax_amount;
	private double delivery_fee;
	private double discount_amount;
	private double total_amount;
	private PaymentMethods payment_method;
	private OrderStatus orderstatus;	
}

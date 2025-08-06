package com.foodapp.food_ordering_spring_api.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@EqualsAndHashCode(callSuper = false)
public class Orders extends BaseEntity {
	@ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
	private User user;//foreign key from user table
	@ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant; // foreign key from restaurant table
//	private delivery_personnel deliveryGuy_id; foreign key from delivery_personnel table
	private LocalDateTime delivery_date_time;
	private LocalDateTime order_date_time;
	private double subtotal;
	private double tax_amount;
	private double delivery_fee;
	private double discount_amount;
	private double total_amount;
	@Enumerated(EnumType.STRING)
	private PaymentMethods payment_method;
	@Enumerated(EnumType.STRING)
	private OrderStatus orderstatus;
	@OneToMany(mappedBy = "order",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<OrderItems> orderItems = new ArrayList<>();
}

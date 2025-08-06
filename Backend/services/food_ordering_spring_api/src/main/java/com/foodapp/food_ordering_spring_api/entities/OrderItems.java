package com.foodapp.food_ordering_spring_api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class OrderItems extends BaseEntity {
	@ManyToOne(optional = false)
	@JoinColumn(name="order_id",nullable = false)
	private Orders order; // foreign key from orders table
	@ManyToOne
	@JoinColumn(name = "menu_item_id", nullable = false)
	private MenuItems menuItem; //foreign key from menu_item table
	private int quantity;
}

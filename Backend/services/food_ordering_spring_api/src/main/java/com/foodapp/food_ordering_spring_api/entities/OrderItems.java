
 package com.foodapp.food_ordering_spring_api.entities;

 import com.fasterxml.jackson.databind.deser.Deserializers.Base;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
 @EqualsAndHashCode
 public class OrderItems extends BaseEntity {
	@ManyToOne 
	@JoinColumn(name = "order_id", nullable = false)
 	private Orders order; // foreign key from orders table
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "menu_item_id",nullable = false)
 	private MenuItem menuItem; //foreign key from menu_item table
 	private int quantity;
 }


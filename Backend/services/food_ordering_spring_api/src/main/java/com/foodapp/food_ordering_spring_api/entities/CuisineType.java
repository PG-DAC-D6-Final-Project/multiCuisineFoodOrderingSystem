package com.foodapp.food_ordering_spring_api.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
public class CuisineType {
	@Column(length = 20)
	private String name;
	@Column(length = 200)
	private String description;
}

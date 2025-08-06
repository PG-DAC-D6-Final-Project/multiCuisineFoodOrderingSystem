
package com.foodapp.food_ordering_spring_api.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
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
public class CuisineType extends BaseEntity{
	@Column(length = 20)
	private String name;
	@Column(length = 200)
	private String description;
	
	@OneToMany(mappedBy = "cuisineType", cascade = CascadeType.ALL)
	private List<MenuItem> menuItems = new ArrayList<>();
	
	public void addMenuItem(MenuItem menuItem) {
		this.menuItems.add(menuItem);
		menuItem.setCuisineType(this);
	}

	public void removeFoodItem(MenuItem menuItem) {
		this.menuItems.remove(menuItem);
		menuItem.setCuisineType(null);
	}
}


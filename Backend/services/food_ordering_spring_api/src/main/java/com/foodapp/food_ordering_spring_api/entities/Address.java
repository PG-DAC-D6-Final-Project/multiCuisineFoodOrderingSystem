package com.foodapp.food_ordering_spring_api.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="address")
@Getter
@Setter
@NoArgsConstructor
public class Address extends BaseEntity {
	@Column(name="address_line1")
	private String addressLine1;
	
	@Column(name="address_line2")
	private String addressLine2;
	
	private String city;
	
	private String state;
	
	private String country;
	
	@Column(name="pin_code")
	private String pinCode;
	
	@ManyToOne
	@JoinColumn(name="user_id", nullable = true)
	private User userObj;

	public Address(String addressLine1, String addressLine2, String city, String state, String country,
			String pinCode) {
		super();
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;
	}
	
	
	
}

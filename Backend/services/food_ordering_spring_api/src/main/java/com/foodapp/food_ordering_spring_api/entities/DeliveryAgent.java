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
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "delivery_agent")
@Getter
@Setter
@NoArgsConstructor
public class DeliveryAgent extends BaseEntity {
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;

	private String email;
	private String password;
	private String phone;
	@Column(name = "is_phone_verified")
	private boolean isPhoneVerified;
	private String image;

	@Enumerated(EnumType.STRING)
	@Column(name = "vehicle_type")
	private VehicleType vehicleType;

	@Column(name = "license_number")
	private String licenseNumber;
	@Column(name = "vehicle_number")
	private String vehicleNumber;

	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	@JoinColumn(name = "address_id")
	private Address address;
	
	@OneToMany(mappedBy = "deliveryPerson", cascade = CascadeType.ALL)
	private List<Orders> orders = new ArrayList<>();

	public DeliveryAgent(String firstName, String lastName, String email, String password, String phone, VehicleType vehicleType, String licenseNumber, String vehicleNumber) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.isPhoneVerified = false;
		this.vehicleType = vehicleType;
		this.licenseNumber = licenseNumber;
		this.vehicleNumber = vehicleNumber;
	}

}
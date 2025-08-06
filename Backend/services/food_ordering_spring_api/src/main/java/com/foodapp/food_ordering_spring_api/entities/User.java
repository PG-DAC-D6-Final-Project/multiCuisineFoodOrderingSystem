package com.foodapp.food_ordering_spring_api.entities;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="user")
@Getter
@Setter
@NoArgsConstructor
public class User extends BaseEntity {
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	
	private String email;
	private String password;
	private String phone;
	@Column(name="is_phone_verified")
	private boolean isPhoneVerified;
	private String image;
	
	
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true,fetch=FetchType.EAGER)
	@JoinColumn(name = "address_id")
	private Address address;
//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private List<Orders> orders = new ArrayList<>();
	public User(String firstName, String lastName, String email, String password, String phone,
			boolean isPhoneVerified) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.isPhoneVerified = false;
	}
		
}

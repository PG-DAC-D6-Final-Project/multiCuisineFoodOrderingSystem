package com.foodapp.food_ordering_spring_api.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
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
	@OneToMany(mappedBy = "userObj",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Address> addressList = new ArrayList<>();
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
	
	public void addAddress(Address userAddress) {
		this.addressList.add(userAddress);
		userAddress.setUserObj(this);
	}
	
	public void removeAddress(Address userAddress) {
		this.addressList.remove(userAddress);
		userAddress.setUserObj(null);
	}
	
	
}

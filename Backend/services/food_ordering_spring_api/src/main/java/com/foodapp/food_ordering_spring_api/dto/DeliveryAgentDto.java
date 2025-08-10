package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.VehicleType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
public class DeliveryAgentDto extends BaseDTO {
	private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private VehicleType vehicleType;
    private String licenseNumber;
    private String vehicleNumber;
}
package com.foodapp.food_ordering_spring_api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
public class DeliveryAgentLoginDto {
    private String email;
    private String password;
}
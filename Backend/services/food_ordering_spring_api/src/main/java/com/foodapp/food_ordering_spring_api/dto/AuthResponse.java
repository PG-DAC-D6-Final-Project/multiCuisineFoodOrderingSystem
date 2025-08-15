package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.Role;

public class AuthResponse {
        private String token;
        private Long id;
        private Role role;
        private String name;
        private String email;
        private String phone;

        public AuthResponse(String token, Long id, Role role, String name, String email, String phone) {
            this.token = token;
            this.id = id;
            this.role = role;
            this.name = name;
            this.email = email;
            this.phone = phone;
        }

        public String getToken() { return token; }
        public Long getId() { return id; }
        public Role getRole() { return role; }
        public String getName() { return name; }
        public String getEmail() { return email; }
        public String getPhone() { return phone; }
    }
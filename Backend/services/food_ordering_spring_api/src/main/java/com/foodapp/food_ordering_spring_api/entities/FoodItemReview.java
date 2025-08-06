package com.foodapp.food_ordering_spring_api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="food_item_reviews")
@Getter
@Setter
@NoArgsConstructor
public class FoodItemReview extends Reviews{

    @ManyToOne
    @JoinColumn(name="menu_item_id")
    private MenuItem menuItem;
    
}
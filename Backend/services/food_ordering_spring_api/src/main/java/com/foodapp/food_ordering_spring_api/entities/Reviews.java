package com.foodapp.food_ordering_spring_api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Reviews extends BaseEntity {

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    private byte rating;
    private String comment;
    @OneToOne
    @JoinColumn(name="order_id")
    private Orders order;

    public Reviews(byte rating, String comment){
        this.rating = rating;
        this.comment = comment;
    }
}

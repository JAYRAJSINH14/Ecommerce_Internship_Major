// package com.ecommerce.entity;
// import jakarta.persistence.*;

// @Entity
// @Table(name = "reviews")
// public class Review {
//     @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private int rating;
//     private String comment;

//     @ManyToOne
//     private User user;

//     @ManyToOne
//     private Product product;
// }
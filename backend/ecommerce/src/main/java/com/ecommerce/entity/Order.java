// package com.ecommerce.entity;
// import jakarta.persistence.*;
// import java.util.List;

// @Entity
// @Table(name = "orders")
// public class Order {
//     @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @ManyToOne
//     private User user;

//     private double totalAmount;
//     private String status;
//     private String paymentMode;

//     @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//     private List<OrderItem> items;
// }
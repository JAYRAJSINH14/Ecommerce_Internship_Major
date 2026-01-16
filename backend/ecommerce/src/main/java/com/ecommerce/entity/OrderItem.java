// package com.ecommerce.entity;
// import com.ecommerce.service.ProductService;
// import jakarta.persistence.*;
// import jakarta.persistence.criteria.*;

// @Entity
// @Table(name = "order_items")
// public class OrderItem {
//     @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @ManyToOne
//     private Order order;

//     @ManyToOne
//     private ProductService product;

//     private int quantity;
//     private double price;
// }
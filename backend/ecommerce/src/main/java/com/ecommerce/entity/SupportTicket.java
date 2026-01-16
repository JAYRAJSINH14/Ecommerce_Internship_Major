// package com.ecommerce.entity;
// import jakarta.persistence.*;

// @Entity
// @Table(name = "support_tickets")
// public class SupportTicket {
//     @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String subject;
//     private String message;
//     private String status;

//     @ManyToOne
//     private User user;
// }
package com.example.juicesinc_backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orders")
public class ordersmodel {

    @Id
    private String orderNumber;
    private String customerName;
    private String customerAddress;
    private String customerContact;
    private double priceOfPremadeItems;
    private double priceOfCustomItems;
    private double totalPrice;

    // Constructor
    public ordersmodel() {}

    public ordersmodel(String orderNumber, String customerName, String customerAddress,
                       String customerContact, double priceOfPremadeItems,
                       double priceOfCustomItems, double totalPrice) {
        this.orderNumber = orderNumber;
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.customerContact = customerContact;
        this.priceOfPremadeItems = priceOfPremadeItems;
        this.priceOfCustomItems = priceOfCustomItems;
        this.totalPrice = totalPrice;
    }

    // Getters and Setters
    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerContact() {
        return customerContact;
    }

    public void setCustomerContact(String customerContact) {
        this.customerContact = customerContact;
    }

    public double getPriceOfPremadeItems() {
        return priceOfPremadeItems;
    }

    public void setPriceOfPremadeItems(double priceOfPremadeItems) {
        this.priceOfPremadeItems = priceOfPremadeItems;
    }

    public double getPriceOfCustomItems() {
        return priceOfCustomItems;
    }

    public void setPriceOfCustomItems(double priceOfCustomItems) {
        this.priceOfCustomItems = priceOfCustomItems;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}

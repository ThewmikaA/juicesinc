package com.example.juicesinc_backend.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "products")
public class productmodel {

    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String category;

    public productmodel () {}

    public productmodel (String id, String name, String description,double price,String category) {
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.category=category;
    }

    public String getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
    }
    public double getPrice() {
        return price;
    }
    public String getCategory() {
        return category;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}

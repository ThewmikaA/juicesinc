package com.example.juicesinc_backend.controller;

import com.example.juicesinc_backend.model.productmodel;
import com.example.juicesinc_backend.service.productservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // Allow your React app to make requests
public class productcontroller {

    @Autowired
    private productservice productservice;

    // Get all products
    @GetMapping
    public List<productmodel> getAllProducts() {
        return productservice.getAllProducts();
    }

    // Get a product by ID
    @GetMapping("/{id}")
    public Optional<productmodel> getProductById(@PathVariable String id) {
        return productservice.getProductById(id);
    }

    // Create a new product
    @PostMapping
    public productmodel createProduct(@RequestBody productmodel product) {
        return productservice.saveProduct(product);
    }

    // Update an existing product
    @PutMapping("/{id}")
    public productmodel updateProduct(@PathVariable String id, @RequestBody productmodel updatedProduct) {
        return productservice.updateProduct(id, updatedProduct);
    }

    // Delete a product by ID
    @DeleteMapping("/{id}")
    public String deleteProductById(@PathVariable String id) {
        productservice.deleteProductById(id);
        return "Product with ID: " + id + " has been deleted.";
    }

    // Find products by name
    @GetMapping("/search/name/{name}")
    public List<productmodel> findProductsByName(@PathVariable String name) {
        return productservice.findProductsByName(name);
    }

    // Find products by category
    @GetMapping("/search/category/{category}")
    public List<productmodel> findProductsByCategory(@PathVariable String category) {
        return productservice.findProductsByCategory(category);
    }

    // Find products by price less than a value
    @GetMapping("/search/price/lessthan/{price}")
    public List<productmodel> findProductsByPriceLessThan(@PathVariable double price) {
        return productservice.findProductsByPriceLessThan(price);
    }

    // Find products within a price range
    @GetMapping("/search/price/between")
    public List<productmodel> findProductsByPriceBetween(@RequestParam double minPrice, @RequestParam double maxPrice) {
        return productservice.findProductsByPriceBetween(minPrice, maxPrice);
    }

    // Find products by partial name
    @GetMapping("/search/name/contains/{partialName}")
    public List<productmodel> findProductsByNameContaining(@PathVariable String partialName) {
        return productservice.findProductsByNameContaining(partialName);
    }
}


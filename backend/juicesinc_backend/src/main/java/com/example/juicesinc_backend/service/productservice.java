package com.example.juicesinc_backend.service;

import com.example.juicesinc_backend.model.productmodel;
import com.example.juicesinc_backend.repository.productrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class productservice {

    @Autowired
    private productrepository productrepository;

    // Fetch all products
    public List<productmodel> getAllProducts() {
        return productrepository.findAll();
    }

    // Fetch a product by its ID
    public Optional<productmodel> getProductById(String id) {
        return productrepository.findById(id);
    }

    // Save a new product
    public productmodel saveProduct(productmodel product) {
        return productrepository.save(product);
    }

    // Update an existing product without changing its ID
    public productmodel updateProduct(String id, productmodel updatedProduct) {
        Optional<productmodel> existingProductOpt = productrepository.findById(id);
        if (existingProductOpt.isPresent()) {
            productmodel existingProduct = existingProductOpt.get();

            existingProduct.setName(updatedProduct.getName());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setPrice(updatedProduct.getPrice());
            existingProduct.setCategory(updatedProduct.getCategory());
            return productrepository.save(existingProduct);
        } else {
            throw new RuntimeException("Product with ID: " + id + " not found.");
        }
    }

    // Delete a product by its ID
    public void deleteProductById(String id) {
        productrepository.deleteById(id);
    }

    // Find products by name
    public List<productmodel> findProductsByName(String name) {
        return productrepository.findByName(name);
    }

    // Find products by category
    public List<productmodel> findProductsByCategory(String category) {
        return productrepository.findByCategoryIgnoreCase(category);
    }

    // Find products with price less than a certain value
    public List<productmodel> findProductsByPriceLessThan(double price) {
        return productrepository.findByPriceLessThan(price);
    }

    // Find products within a price range
    public List<productmodel> findProductsByPriceBetween(double minPrice, double maxPrice) {
        return productrepository.findByPriceBetween(minPrice, maxPrice);
    }

    // Find products by partial name
    public List<productmodel> findProductsByNameContaining(String partialName) {
        return productrepository.findByNameContainingIgnoreCase(partialName);
    }
}

package com.example.juicesinc_backend.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.juicesinc_backend.model.productmodel;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface productrepository extends MongoRepository<productmodel, String> {

    // Find products by name (case-sensitive)
    List<productmodel> findByName(String name);

    // Find products by category (case-insensitive)
    List<productmodel> findByCategoryIgnoreCase(String category);

    // Find products by price less than a given value
    List<productmodel> findByPriceLessThan(double price);

    // Find products by price between a range
    List<productmodel> findByPriceBetween(double minPrice, double maxPrice);

    // Find products with a name containing a specific string (case-insensitive)
    List<productmodel> findByNameContainingIgnoreCase(String partialName);

}

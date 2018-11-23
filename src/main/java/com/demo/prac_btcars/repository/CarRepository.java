package com.demo.prac_btcars.repository;

import com.demo.prac_btcars.domain.Car;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Car entity.
 */
@SuppressWarnings("unused")
public interface CarRepository extends JpaRepository<Car,Long> {
    public List<Car> findByMake(String make);
    @Query(value = "SELECT * FROM car ORDER BY RAND() LIMIT 0,3 ",nativeQuery=true)
    public List<Car> findTop3Rand();
    public List<Car> findTop5ByOrderBySoldDesc();
    public List<Car> findTop3ByOrderByIdDesc();
    public List<Car> findTop5ByOrderByPriceAsc(); 
}

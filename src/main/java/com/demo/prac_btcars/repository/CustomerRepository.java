package com.demo.prac_btcars.repository;

import com.demo.prac_btcars.domain.Customer;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Customer entity.
 */
@SuppressWarnings("unused")
public interface CustomerRepository extends JpaRepository<Customer,Long> {

    @Query("select distinct customer from Customer customer left join fetch customer.cars")
    List<Customer> findAllWithEagerRelationships();

    @Query("select customer from Customer customer left join fetch customer.cars where customer.id =:id")
    Customer findOneWithEagerRelationships(@Param("id") Long id);

}

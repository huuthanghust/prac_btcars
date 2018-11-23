package com.demo.prac_btcars.repository;

import com.demo.prac_btcars.domain.Recommend;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Recommend entity.
 */
@SuppressWarnings("unused")
public interface RecommendRepository extends JpaRepository<Recommend,Long> {

}

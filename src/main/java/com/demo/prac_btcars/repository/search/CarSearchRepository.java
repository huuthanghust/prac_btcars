package com.demo.prac_btcars.repository.search;

import com.demo.prac_btcars.domain.Car;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Car entity.
 */
public interface CarSearchRepository extends ElasticsearchRepository<Car, Long> {
}

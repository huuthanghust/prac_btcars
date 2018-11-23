package com.demo.prac_btcars.repository.search;

import com.demo.prac_btcars.domain.Orderlist;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Orderlist entity.
 */
public interface OrderlistSearchRepository extends ElasticsearchRepository<Orderlist, Long> {
}

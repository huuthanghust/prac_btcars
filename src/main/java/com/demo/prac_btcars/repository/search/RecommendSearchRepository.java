package com.demo.prac_btcars.repository.search;

import com.demo.prac_btcars.domain.Recommend;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Recommend entity.
 */
public interface RecommendSearchRepository extends ElasticsearchRepository<Recommend, Long> {
}

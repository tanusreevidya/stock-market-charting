package com.cts.training.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.training.model.StockExchange;

@RepositoryRestResource(path = "stock", collectionResourceRel = "stock")
public interface StockExchangeRestResource extends PagingAndSortingRepository<StockExchange, Integer>{

}

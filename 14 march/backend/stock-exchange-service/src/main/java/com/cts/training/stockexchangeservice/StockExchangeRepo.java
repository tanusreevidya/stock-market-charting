package com.cts.training.stockexchangeservice;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.stockexchangeservice.StockExchange;

public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer>{

}

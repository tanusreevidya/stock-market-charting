package com.cts.training.stockexchangeservice;

import java.util.List;

import com.cts.training.stockexchangeservice.StockExchange;;

public interface StockExchangeService {

//	public StockExchange insert(StockExchange stockExchange);
	public StockExchange addStockExchange(StockExchange stockExchange);
    public void deleteStockExchange(int id);
    public StockExchange updateStockExchange(StockExchange stockExchange);
    public List<StockExchange> getAllStockExchanges();
    public StockExchange getStockExchangeById(int id);

}

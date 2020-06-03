package com.cts.training.stockexchangeservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockExchangeServiceImpl implements StockExchangeService {

	@Autowired
	StockExchangeRepo stockExchangeRepo;
	
	
	@Override
	public StockExchange addStockExchange(StockExchange stockExchange) {

	    stockExchangeRepo.save(stockExchange);
	    return stockExchange;
	}
	@Override
	public List<StockExchange> getAllStockExchanges(){
		List<StockExchange> entities = stockExchangeRepo.findAll();
		List<StockExchange> stockExchanges = new ArrayList<StockExchange>();
		for(StockExchange entity: entities) {
			StockExchange stockExchange = new StockExchange();
			BeanUtils.copyProperties(entity, stockExchange);
			stockExchanges.add(stockExchange);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+stockExchanges);
		return stockExchanges;
	}
	@Override
	public void deleteStockExchange(int id) {
		stockExchangeRepo.deleteById(id);
	}
	@Override
	public StockExchange getStockExchangeById(int id){
		Optional<StockExchange> stockExchanges = stockExchangeRepo.findById(id);
		StockExchange stockExchange = new StockExchange();
		BeanUtils.copyProperties(stockExchanges.orElse(new StockExchange()), stockExchange);
		return stockExchange;
	}
	@Override
	public StockExchange updateStockExchange(StockExchange stockExchange) {

		stockExchangeRepo.save(stockExchange);
		return stockExchange;
	}

	
	
}

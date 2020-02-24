package com.cts.training.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.model.StockExchange;
import com.cts.training.repo.StockExchangeRepo;


@RestController
@CrossOrigin(origins="*")
public class StockExchangeRestServiceController {
	@Autowired
	StockExchangeRepo sr;
	@RequestMapping(value="/stockExchange", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<StockExchange> findAll(){
		return sr.findAll();
	}
	@RequestMapping(value="/stockExchange/{id}", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public StockExchange findone(@PathVariable int id){
		Optional<StockExchange> stk = sr.findById(id);
		StockExchange s = stk.get();
		return s;
	}
	@RequestMapping(value="/stockExchange", method= RequestMethod.POST)
	public StockExchange save(@RequestBody StockExchange stock){
		 StockExchange stk = sr.save(stock);
		return stk;
	}
	@RequestMapping(value="/stockExchange/{id}", method= RequestMethod.DELETE)
	public void    delete(@PathVariable int id){
		sr.deleteById(id);
	}
	@RequestMapping(value = "/stockExchange", method = RequestMethod.PUT)
	public StockExchange update(@RequestBody StockExchange stock) {
		StockExchange stk = sr.save(stock);
		return stk;
	}


}

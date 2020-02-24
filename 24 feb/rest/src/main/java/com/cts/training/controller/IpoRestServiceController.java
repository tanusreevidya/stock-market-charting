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

import com.cts.training.model.Company;
import com.cts.training.model.IPO;
import com.cts.training.repo.CompanyRepo;
import com.cts.training.repo.IpoRepo;

@RestController
@CrossOrigin(origins="*")
public class IpoRestServiceController {
	@Autowired
	IpoRepo ir;
	@RequestMapping(value="/ipo", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<IPO> findAll(){
		return ir.findAll();
	}
	@RequestMapping(value="/ipo/{id}", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public IPO findone(@PathVariable int id){
		Optional<IPO> ip = ir.findById(id);
		IPO i = ip.get();
		return i;
	}
	@RequestMapping(value="/ipo", method= RequestMethod.POST)
	public IPO save(@RequestBody IPO ipo){
		IPO ip = ir.save(ipo);
		return ip;
	}
	@RequestMapping(value="/ipo/{id}", method= RequestMethod.DELETE)
	public void    delete(@PathVariable int id){
		ir.deleteById(id);
	}
	@RequestMapping(value = "/ipo", method = RequestMethod.PUT)
	public IPO update(@RequestBody IPO ipo) {
		IPO ip = ir.save(ipo);
		return ip;
	}


}

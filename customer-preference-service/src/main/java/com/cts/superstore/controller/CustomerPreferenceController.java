package com.cts.superstore.controller;

import java.util.List;


//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.superstore.entity.CustomerPreferenceEntity;
import com.cts.superstore.service.CustomerPreferenceService;

import lombok.extern.slf4j.Slf4j;


@RestController
@RequestMapping("cts/superstore")
@Slf4j
public class CustomerPreferenceController {

	//Logger logger = LoggerFactory.getLogger(this.getClass());
	

		
	@Autowired
	CustomerPreferenceService customerPreferenceService;
	
	@PutMapping("/customer")
	public ResponseEntity<CustomerPreferenceEntity> update(@RequestBody CustomerPreferenceEntity customerPreference ) {
		
		log.info("Get All updated info........");
		CustomerPreferenceEntity customerPreferenceEntity = customerPreferenceService.updateCustomerPreference(customerPreference);
		log.info("updated --> {}",customerPreferenceEntity);
		return new ResponseEntity<CustomerPreferenceEntity>(customerPreferenceEntity,HttpStatus.OK);
	}
	
	@GetMapping("/customer")
	public ResponseEntity<?>getAllCustomers(){
		List<CustomerPreferenceEntity> customersList= customerPreferenceService.getAllCustomers();
		if(customersList.size()>0) {
			return new ResponseEntity<List>(customersList,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("No data",HttpStatus.NOT_FOUND);
		}
			
		
	}
	

}




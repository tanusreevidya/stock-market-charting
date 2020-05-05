package com.cts.superstore.service;



import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.superstore.entity.CustomerPreferenceEntity;

import com.cts.superstore.repository.CustomerPreferenceRepository;

@Service
public class CustomerPreferenceService {
	
	
	
	@Autowired
	CustomerPreferenceRepository customerPreferenceRepo;
	
	public CustomerPreferenceEntity updateCustomerPreference(CustomerPreferenceEntity customerPreferenceEntity) {
		
    	customerPreferenceEntity.setUpdated(LocalDate.now());
		String updatedBy = customerPreferenceEntity.getName();
		customerPreferenceEntity.setUpdatedBy(updatedBy);
		customerPreferenceRepo.save(customerPreferenceEntity);
		  System.out.println(customerPreferenceEntity);
			
		return customerPreferenceEntity;
	}
	
	public List<CustomerPreferenceEntity> getAllCustomers() {
		List<CustomerPreferenceEntity> entities=customerPreferenceRepo.findAll();
		List<CustomerPreferenceEntity> allCustomersList=new ArrayList<CustomerPreferenceEntity>();
		for(CustomerPreferenceEntity entity:entities) {
			CustomerPreferenceEntity customerPreferenceEntity=new CustomerPreferenceEntity();
			BeanUtils.copyProperties(entity,customerPreferenceEntity);
			allCustomersList.add(customerPreferenceEntity);
         }
		return allCustomersList;
	}
  
}

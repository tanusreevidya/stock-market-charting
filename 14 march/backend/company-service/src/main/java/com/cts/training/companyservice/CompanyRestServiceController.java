package com.cts.training.companyservice;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.cts.training.companyservice.Company;
import com.cts.training.companyservice.CompanyRepo;
import com.cts.training.companyservice.CompanyService;

@RestController
@CrossOrigin(origins="*")
public class CompanyRestServiceController {
	@Autowired
	CompanyRepo companyRepo;
	
	@Autowired
	CompanyService companyService;
	
	@GetMapping(value="/company",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllCompanies(){
		List<Company> list = companyService.getAllCompanies();
		if(list.size()>0) {
			return new ResponseEntity<List<Company>>(list, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("No Companies found",HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping(value="/company/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCompanyById(@PathVariable int id)
	{
		try {
			Company company =  companyService.getCompanyById(id);
			return new ResponseEntity<Company>(company, HttpStatus.OK);
		}catch(NoSuchElementException e){
			return new ResponseEntity<String>("no such Company", HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value="/company")
	public ResponseEntity<Company> save(@RequestBody Company company)
	{
		companyService.addCompany(company);
		return new ResponseEntity<Company>(company,HttpStatus.CREATED);		
	}
//	public Company save(@RequestBody Company com){
//	Company comp = cr.save(com);
//	return comp;
//  }
	
	
	@DeleteMapping(value="/company/{id}")
	public ResponseEntity<?>  deleteCompany(@PathVariable int id){
		companyService.deleteCompany(id);
	    return new ResponseEntity<Company>(HttpStatus.OK);
	}
	@PutMapping(value = "/company")
	public ResponseEntity<Company> update(@RequestBody Company company) {
		Company comp = companyService.updateCompany(company);
		return new ResponseEntity<Company>(HttpStatus.OK);
	}


}

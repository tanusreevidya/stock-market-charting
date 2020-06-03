package com.cts.training.initialpublicofferingsservice;

import java.util.List;
import java.util.NoSuchElementException;

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
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.initialpublicofferingsservice.InitialPublicOffering;
import com.cts.training.initialpublicofferingsservice.InitialPublicOfferingRepo;
import com.cts.training.initialpublicofferingsservice.InitialPublicOfferingService;

@RestController
@CrossOrigin(origins="*")
public class InitialPublicOfferingRestServiceController {
	@Autowired
	InitialPublicOfferingRepo ipoRepo;
	
	@Autowired
	InitialPublicOfferingService ipoService;
	
	@GetMapping(value="/ipo",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllIpos(){
		List<InitialPublicOffering> list = ipoService.getAllIpos();
		if(list.size()>0) {
			return new ResponseEntity<List<InitialPublicOffering>>(list, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("No Companies found",HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping(value="/ipo/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getIpoById(@PathVariable int id)
	{
		try {
			InitialPublicOffering ipo =  ipoService.getIpoById(id);
			return new ResponseEntity<InitialPublicOffering>(ipo, HttpStatus.OK);
		}catch(NoSuchElementException e){
			return new ResponseEntity<String>("no such Company", HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping(value="/ipo")
	public ResponseEntity<InitialPublicOffering> save(@RequestBody InitialPublicOffering ipo)
	{
		ipoService.addIpo(ipo);
		return new ResponseEntity<InitialPublicOffering>(ipo,HttpStatus.CREATED);		
	}

	@DeleteMapping(value="/ipo/{id}")
	public ResponseEntity<?>  deleteIpo(@PathVariable int id){
		ipoService.deleteIpo(id);
		return new ResponseEntity<InitialPublicOffering>(HttpStatus.OK);
	}
	@PutMapping(value = "/ipo")
	public ResponseEntity<InitialPublicOffering> update(@RequestBody InitialPublicOffering ipo) {
		InitialPublicOffering ip = ipoService.updateIpo(ipo);
		return new ResponseEntity<InitialPublicOffering>(ip,HttpStatus.OK);
	}


}

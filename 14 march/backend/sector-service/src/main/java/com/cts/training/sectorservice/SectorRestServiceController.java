package com.cts.training.sectorservice;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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



@RestController
@CrossOrigin(origins="*")
public class SectorRestServiceController {
	
//	Logger logger = LoggerFactory.getLogger(SectorRestServiceController.class);
	Logger logger = LoggerFactory.getLogger(this.getClass());
		
	@Autowired
	private UserServiceProxy proxy;
	
	@Autowired
	SectorRepo sectorRepo;
	
	@Autowired
	SectorService sectorService;
	
	@GetMapping(value="/sector",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllSectors(){
	  List<Sector> list = sectorService.getAllSectors();
	  if(list.size()>0) {
		  return  new ResponseEntity<List<Sector>>(list, HttpStatus.OK);
	  }
	  else {
		  return  new ResponseEntity<String>("No Sectors", HttpStatus.OK);
	  }
	
	}
	@GetMapping(value="/sector/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getSectorById(@PathVariable int id){
		Sector sector = sectorService.getSectorById(id);
		return new ResponseEntity<Sector>(sector, HttpStatus.OK);
	}
	@PostMapping(value="/sector")
	public ResponseEntity<?> addSector(@RequestBody Sector sector){
		Sector sec = sectorService.addSector(sector);
		return new ResponseEntity<Sector>(sec, HttpStatus.OK);
	}
	@DeleteMapping(value="/sector/{id}")
	public ResponseEntity<?> deleteSector(@PathVariable int id){
		sectorService.deleteSector(id);
		return new ResponseEntity<Sector>(HttpStatus.OK);
	}
	@PutMapping(value = "/sector")
	public ResponseEntity<?> update(@RequestBody Sector sector) {
		Sector sect = sectorService.updateSector(sector);
		return new ResponseEntity<Sector>(sect, HttpStatus.OK);
	}
	
	@GetMapping(value="/users-by-sector",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllUsersBySector(){
		logger.info("Get All Users Invoked........");
		ResponseEntity<?> users = proxy.getAllUsers();
		logger.info("Information --> {}",users);
		return users;
	}


}

package com.cts.training.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

import com.cts.training.model.Register;
import com.cts.training.repo.RegisterRepo;
@RestController
@CrossOrigin(origins="*")
public class RegisterRestServiceController {
	@Autowired
	RegisterRepo rr;
	@RequestMapping(value="/register", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Register> findAll(){
		return rr.findAll();
	}
	@RequestMapping(value="/register/{id}", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public Register findone(@PathVariable int id){
		Optional<Register> reg = rr.findById(id);
		Register r = reg.get();
		return r;
	}
	@RequestMapping(value="/register", method= RequestMethod.POST)
	public Register save(@RequestBody Register reg){
		Register register = rr.save(reg);
		return register;
	}
	@RequestMapping(value="/register/{id}", method= RequestMethod.DELETE)
	public void    delete(@PathVariable int id){
		rr.deleteById(id);
	}
	@RequestMapping(value = "/register", method = RequestMethod.PUT)
	public Register update(@RequestBody Register reg) {
		System.out.println("user info::"+reg.getUsername()+" "+reg.getEmail());
		Register register = rr.save(reg);
		return register;
	}
}


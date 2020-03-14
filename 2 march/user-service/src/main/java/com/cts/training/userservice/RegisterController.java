package com.cts.training.userservice;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.userservice.Register;
import com.cts.training.userservice.RegisterRepo;
import com.cts.training.userservice.RegisterService;

@CrossOrigin("*")
@RestController
public class RegisterController {
	@Autowired
	RegisterRepo registerRepo;
	
	@Autowired
	RegisterService registerService;
	

	@RequestMapping(value="/register", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)

	public ResponseEntity<?> getAllUsers(){
		List<Register> list = registerService.getAllUsers();
		if(list.size()>0) {
			return new ResponseEntity<List<Register>>(list, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("No users found",HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value="/register/{id}", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getUserById(@PathVariable int id)
	{
		try {
			Register register =  registerService.getUserById(id);
			return new ResponseEntity<Register>(register, HttpStatus.OK);
		}catch(NoSuchElementException e){
			return new ResponseEntity<String>("no such user", HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value="/register", method= RequestMethod.POST)
	public ResponseEntity<?> addUser(@RequestBody Register register){
	try {
		
		registerService.addUser(register);
		return new ResponseEntity<Register>(register, HttpStatus.OK);
   	}catch (Exception e) {
   		return new ResponseEntity<String>("cannot add user", HttpStatus.NOT_FOUND);
   	}
}
	@RequestMapping(value="/register/{id}", method= RequestMethod.DELETE)
	public void  deleteUser(@PathVariable int id){
		registerRepo.deleteById(id);
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.PUT)
	public Register update(@RequestBody Register register) {

	register = registerService.updateUser(register);
	return register;

	}
	
	@RequestMapping(value="/activate",method= RequestMethod.PUT)
	public Register activate(@RequestBody String email)
	{
		String str=email.substring(email.indexOf(":")+2,email.lastIndexOf("\""));
		System.out.println("emil ::"+str);
		Register user =	registerRepo.findByEmail(str);
		System.out.println("uname :"+user.getUsername());
		user.setActive("yes");
		Register register = registerRepo.save(user);
	    return register;
		
	}


}

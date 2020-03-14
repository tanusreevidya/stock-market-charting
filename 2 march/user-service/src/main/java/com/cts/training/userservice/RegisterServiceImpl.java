package com.cts.training.userservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.cts.training.userservice.RegisterDTO;
import com.cts.training.userservice.Register;
import com.cts.training.userservice.RegisterRepo;
import com.cts.training.userservice.RegisterService;

@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	RegisterRepo registerRepo;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	@Override
	public String addUser(Register registerDTO) {
		Register register=new Register();
		String email;
		try {
			SimpleMailMessage message= new SimpleMailMessage();
			message.setFrom("tanusreevidya13@gmail.com");
			message.setTo(registerDTO.getEmail());
			email=registerDTO.getEmail();
			if(registerRepo.findByEmail(email)!= null) {
				return "{\"res\":\"0\"}";
			}
			else {
				BeanUtils.copyProperties(registerDTO, register);
				registerRepo.save(register);
				message.setSubject("Activation Mail");
				message.setText("Account Created Click on 'http://localhost:4200/activate?"+register.getEmail()+"'");
				javaMailSender.send(message);
				System.out.println("Sending Mail.........");
				return "{\"res\":\"1\"}";
			}
		}
		catch(Exception e){
			e.printStackTrace();
			return "{\"res\":\"2\"}";
		}
	}
	@Override
	public List<Register> getAllUsers(){
		List<Register> entities = registerRepo.findAll();
		List<Register> registerList = new ArrayList<Register>();
		for(Register entity: entities) {
			Register register = new Register();
			BeanUtils.copyProperties(entity, register);
			registerList.add(register);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+registerList);
		return registerList;
	}
	@Override
	public void deleteUser(int id) {
		registerRepo.deleteById(id);
	}
	@Override
	public Register getUserById(int id){
		Optional<Register> users = registerRepo.findById(id);
		Register register = new Register();
		BeanUtils.copyProperties(users.orElse(new Register()), register);
		return register;
	}
//
//	@Override
//	public RegisterDTO getById(int id) {
//		//Register reg=user.findById(id)
//		
//		return null;
//	}
//	@Override
//	public boolean activateUser(String email) {
//		System.out.println(email);
//		Register users = user.findByEmail(email).get();
//		System.out.println(users);
//		if(!users.isConfirmed()) {
//			System.out.println(users);
//			users.setConfirmed(true);
//			user.save(users);
//			return true;
//		}
//		else {
//			return false;
//		}
//	}
	@Override
	public Register updateUser(Register register) {
		//Register register = new Register();
		//BeanUtils.copyProperties(registerDTO, register);
		registerRepo.save(register);
		return register;
	}
}
	

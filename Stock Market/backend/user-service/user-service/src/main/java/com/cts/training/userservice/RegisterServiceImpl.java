package com.cts.training.userservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.mail.internet.MimeMessage;

//import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

//import com.cts.training.userservice.RegisterDTO;
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
	public Register addUser(Register register) {
			Register reg = new Register();
			try {
				MimeMessage mimeMessage=javaMailSender.createMimeMessage();
				MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,"utf-8");
				helper.setFrom("tanusreevidya13@gmail.com");			
				helper.setTo(register.getEmail());
				helper.setSubject("verification mail");
				//sm.setText("This is testing mail");
				helper.setText("Account created click on <a href='http://localhost:4200/activate?"+register.getEmail()+"'>Click Here To Verify</a>",true);
				javaMailSender.send(mimeMessage);
				//logger.info("sending mail..");
				BeanUtils.copyProperties(register, reg);
				registerRepo.save(reg);

			}
		catch(Exception e) {e.printStackTrace();}
		return register;
	}
	
	@Override
	public String activate(@RequestBody String email) {
		String str=email.substring(email.indexOf(":")+2,email.lastIndexOf("\""));
	System.out.println("email ::"+str);
	Register register = registerRepo.findByEmail(str);
	System.out.println("uname :"+ register.getEmail());
	register.setActive(true);
    register = registerRepo.save(register);
       return "{\"status\":\"ok\"}";
	}
//	public String addUser(Register registerDTO) {
//		Register register=new Register();
//		String email;
//		try {
//			SimpleMailMessage message= new SimpleMailMessage();
//			message.setFrom("tanusreevidya13@gmail.com");
//			message.setTo(registerDTO.getEmail());
//			email=registerDTO.getEmail();
//			if(registerRepo.findByEmail(email)!= null) {
//				return "{\"res\":\"0\"}";
//			}
//			else {
//				BeanUtils.copyProperties(registerDTO, register);
//				registerRepo.save(register);
//				message.setSubject("Activation Mail");
//				message.setText("Account Created Click on 'http://localhost:4200/activate?"+register.getEmail()+"'");
//				javaMailSender.send(message);
//				System.out.println("Sending Mail.........");
//				return "{\"res\":\"1\"}";
//			}
//		}
//		catch(Exception e){
//			e.printStackTrace();
//			return "{\"res\":\"2\"}";
//		}
//	}
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

	@Override
	public Register updateUser(Register register) {
		Register register2 = new Register();
		BeanUtils.copyProperties(register, register2);
		BeanUtils.copyProperties(registerRepo.save(register2),register);
		return register;
	}

	@Override
	public Register findByUsernameAndPassword(String username, String password) {
		Register register = registerRepo.findByUsernameAndPassword(username, password);
		return register;
	}
}
	

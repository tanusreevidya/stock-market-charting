package com.cts.training.initialpublicofferingsservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.initialpublicofferingsservice.InitialPublicOffering;
import com.cts.training.initialpublicofferingsservice.InitialPublicOfferingRepo;
import com.cts.training.initialpublicofferingsservice.InitialPublicOfferingService;

@Service
public class InitialPublicOfferingServiceImpl implements InitialPublicOfferingService {

	@Autowired
	InitialPublicOfferingRepo ipoRepo;
		
	@Override
	public InitialPublicOffering addIpo(InitialPublicOffering ipo) 
	{
	    ipoRepo.save(ipo);
	    return ipo;
	}
	@Override
	public List<InitialPublicOffering> getAllIpos(){
		List<InitialPublicOffering> entities = ipoRepo.findAll();
		List<InitialPublicOffering> ipos = new ArrayList<InitialPublicOffering>();
		for(InitialPublicOffering entity: entities) {
			InitialPublicOffering ipo = new InitialPublicOffering();
			BeanUtils.copyProperties(entity, ipo);
			ipos.add(ipo);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+ipos);
		return ipos;
	}
	@Override
	public void deleteIpo(int id) {
		ipoRepo.deleteById(id);
	}
	@Override
	public InitialPublicOffering getIpoById(int id){
		Optional<InitialPublicOffering> ipos = ipoRepo.findById(id);
		InitialPublicOffering ipo = new InitialPublicOffering();
		BeanUtils.copyProperties(ipos.orElse(new InitialPublicOffering()), ipo);
		return ipo;
	}
	@Override
	public InitialPublicOffering updateIpo(InitialPublicOffering ipo) {

		ipoRepo.save(ipo);
		return ipo;
	}


}

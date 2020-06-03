package com.cts.training.initialpublicofferingsservice;

import java.util.List;

import com.cts.training.initialpublicofferingsservice.InitialPublicOffering;

public interface InitialPublicOfferingService {

	//public IPO insert(IPO id);
	public InitialPublicOffering addIpo(InitialPublicOffering ipo);
    public void deleteIpo(int id);
    public InitialPublicOffering updateIpo(InitialPublicOffering ipo);
    public List<InitialPublicOffering> getAllIpos();
    public InitialPublicOffering getIpoById(int id);
}

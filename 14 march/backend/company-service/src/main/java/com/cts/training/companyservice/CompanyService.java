package com.cts.training.companyservice;

import java.util.List;

import com.cts.training.companyservice.Company;


public interface CompanyService {

	//public Company insert(Company cd);
	public Company addCompany(Company company);
    public void deleteCompany(int id);
    public Company updateCompany(Company company);
    public List<Company> getAllCompanies();
    public Company getCompanyById(int id);
}

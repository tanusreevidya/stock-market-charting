package com.cts.training.companyservice;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.companyservice.Company;

public interface CompanyRepo extends JpaRepository<Company, Integer>{

}

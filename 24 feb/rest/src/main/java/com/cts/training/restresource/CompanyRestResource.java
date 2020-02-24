package com.cts.training.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.training.model.Company;

@RepositoryRestResource(path = "company", collectionResourceRel = "company")
public interface CompanyRestResource extends PagingAndSortingRepository<Company, Integer> {

}

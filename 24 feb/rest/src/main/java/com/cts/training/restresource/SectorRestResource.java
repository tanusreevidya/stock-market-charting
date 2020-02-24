package com.cts.training.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.training.model.IPO;

@RepositoryRestResource(path = "ipo", collectionResourceRel = "ipo")
public interface SectorRestResource extends PagingAndSortingRepository<IPO, Integer> {

}

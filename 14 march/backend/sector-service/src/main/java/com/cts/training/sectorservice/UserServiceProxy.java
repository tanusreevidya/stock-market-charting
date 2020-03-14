package com.cts.training.sectorservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

//@FeignClient("user-service")
//@FeignClient(name ="", url="http://localhost:8000")
@FeignClient("netflix-zuul-api-gateway-server")
public interface UserServiceProxy {
	
	@GetMapping(value="/user-service/register",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllUsers();

}

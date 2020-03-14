package com.cts.training.companyservice;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import com.cts.training.companyservice.Company;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;



@SpringBootTest(classes =CompanyServiceApplication.class,
webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CompanyControllerIT {
	
	@LocalServerPort
	private int port;
	HttpHeaders headers = new HttpHeaders();
	TestRestTemplate restTemplate = new TestRestTemplate();

	@Test
	void getAllCompanies() throws Exception {
		String url = "http://localhost:"+port+"/company";
		System.out.println("port :: " +url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity<String> entity = new HttpEntity<String>(null, headers);
	    ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
	    String expected = "{\"id\":1,\"companyname\":\"dark-choclate\"";
	    System.out.println("Test1 :: Response body::" +response.getBody());
	    assertTrue(response.getBody().contains(expected));
	}
	
	@Test
	void getCompanyById() throws Exception {
		String url = "http://localhost:"+port+"/company/1";
		System.out.println("port :: " +url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity<String> entity = new HttpEntity<String>(null, headers);
	    ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
	    String expected = "{\"id\":1,\"companyname\":\"dark-choclate\"";
	    System.out.println("Test1 :: Response body::" +response.getBody());
	    assertTrue(response.getBody().contains(expected));
	}
	
	
	@Test
	public void addCompany() throws Exception
	{
		String url="http://localhost:"+port+"/company";
		System.out.println("Port is ::"+url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		Company company=new Company(99, "bootstrap", "design", "parvathi", "srinu","09", 87583);
		HttpEntity<Company> entity=new HttpEntity<Company>(company,headers);
		ResponseEntity<Company> response=restTemplate.exchange(url,HttpMethod.POST,entity,Company.class);
		System.out.println("Add Company :: Response Body :::: " +response.getBody());
		assertTrue(response.getBody().getCeo().equals("sindhu"));
	}
	
	@Test
	public void updateCompany() throws Exception
	{
		String url="http://localhost:"+port+"/company";
		System.out.println("Port is ::"+url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		Company company=new Company(127, "font awsome", "html", "sindhu", "prudvi","03", 87583);
		HttpEntity<Company> entity=new HttpEntity<Company>(company,headers);
		ResponseEntity<Company> response=restTemplate.exchange(url,HttpMethod.PUT,entity,Company.class);
		System.out.println("Add Company :: Response Body :::: " +response.getBody());
		assertTrue(response.getBody().getCeo().equals("sindhu"));
	}

	@Test
	public void deleteCompany() throws Exception
	{
		String url="http://localhost:"+port+"/company/50";
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<Company> entity=new HttpEntity<Company>(null,headers);
		ResponseEntity<String> response=restTemplate.exchange(url,HttpMethod.DELETE,entity,String.class);
		System.out.println("delete :: Response Body :::: " +response.getBody());
		assertEquals(HttpStatus.OK,response.getStatusCode());
	}
	
}

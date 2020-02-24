package com.cts.training.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "ipos")
@XmlRootElement(name="ipo")

public class IPO implements Serializable {

	private static final long serialVersionUID = 1242096820492688295L;
	@Id
	@GeneratedValue
	private int id;
	private String companyName;
	private String stockExchange;
	private long pricePerShare;
	private long totalStocks;
	private String openDateTime;
	private String remarks;
	public IPO() {
		
	}
	public IPO(int id, String companyName, String stockExchange, long pricePerShare, long totalStocks,
			 String openDateTime, String remarks) {
		this.id = id;
		this.companyName = companyName;
		this.stockExchange = stockExchange;
		this.pricePerShare = pricePerShare;
		this.totalStocks = totalStocks;
		this.openDateTime = openDateTime;
		this.remarks = remarks;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	public long getPricePerShare() {
		return pricePerShare;
	}
	public void setPricePerShare(long pricePerShare) {
		this.pricePerShare = pricePerShare;
	}
	public long getTotalStocks() {
		return totalStocks;
	}
	public void setTotalStocks(long totalStocks) {
		this.totalStocks = totalStocks;
	}
//	public LocalDateTime getOpenDateTime() {
//		return openDateTime;
//	}
//	public void setOpenDateTime(String openDateTime) {
//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'H:m"); 
//		this.openDateTime = LocalDateTime.parse(openDateTime, formatter);
//	}
	
	public String getOpenDateTime() {
		return openDateTime;
	}
	public void setOpenDateTime(String openDateTime) {
		this.openDateTime = openDateTime;
	}
	public String getRemarks() {
		return remarks;
	}
	
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	@Override
	public String toString() {
		return "IPO [id=" + id + ", companyName=" + companyName + ", stockExchange=" + stockExchange
				+ ", pricePerShare=" + pricePerShare + ", totalStocks=" + totalStocks + ", remarks=" + remarks + "]";
	}
}

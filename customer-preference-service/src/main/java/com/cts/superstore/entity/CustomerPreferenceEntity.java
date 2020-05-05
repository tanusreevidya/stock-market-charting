package com.cts.superstore.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "customerPreference")
@NoArgsConstructor
@AllArgsConstructor
public @Data class CustomerPreferenceEntity implements Serializable{
	
	
	 
	private static final long serialVersionUID = -8370977052740734405L;
		@Id
	    @GeneratedValue
	    private int id;
		private int custId;
	    private String name;
	    private long phone;
	    private String email;
	    private String preferedContact;
	    private String workAddress;
	    private String homeAddress;
        private String preferedAddress;
        private String deliveryTimings;
        private boolean offerUpdates;
        private boolean availableOnSunday;
        private LocalDate created;
        private String createdBy;
        private LocalDate updated;
        private String updatedBy;
        private boolean isActive;
        
        
        
}
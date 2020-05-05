package com.cts.superstore.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class CustomerPreference {
	
	
	
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
    
        
        
        
}

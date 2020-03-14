package com.cts.training.userservice;

public class RegisterDTO {
	
	private int id;
	private String username;
	private String email;
	private long phone;
	private String password;
	
	public RegisterDTO() {
		
	}

	public RegisterDTO(int id, String username, String email, long phone, String password) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.phone = phone;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "RegisterDTO [id=" + id + ", username=" + username + ", email=" + email + ", phone=" + phone
				+ ", password=" + password + "]";
	}
	
	

}

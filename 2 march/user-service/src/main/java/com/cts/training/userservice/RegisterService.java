package com.cts.training.userservice;

import java.util.List;

import com.cts.training.userservice.RegisterDTO;
import com.cts.training.userservice.Register;

public interface RegisterService {

	//public RegisterDTO insert(RegisterDTO rd);
    public String addUser(Register user);
    public void deleteUser(int id);
    public Register updateUser(Register user);
    public List<Register> getAllUsers();
    public Register getUserById(int id);

}

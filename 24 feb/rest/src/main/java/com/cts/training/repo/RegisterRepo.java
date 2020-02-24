package com.cts.training.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.model.Register;

public interface RegisterRepo extends JpaRepository<Register, Integer> {

}

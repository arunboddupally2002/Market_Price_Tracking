package com.marketprice.Service;

import java.util.List;

import com.marketprice.Model.Usermodel;

public interface UserService_interface {

	Usermodel createUser(Usermodel user);

	List<Usermodel> getUsers();

	Usermodel updateById(long id, Usermodel user);

	String deleteById(long id);

	List<Usermodel> findByName(String name);

	List<Usermodel> findByEmail(String email);

	boolean findByEmailAndPassword(String email, String password);

}

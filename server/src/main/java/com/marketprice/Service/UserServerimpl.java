package com.marketprice.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marketprice.Model.Usermodel;
import com.marketprice.Repository.UserRepository;
@Service
public class UserServerimpl implements UserService_interface
{
	@Autowired
	private UserRepository repo;
	@Override
	public Usermodel createUser(Usermodel user) {
		
		return repo.save(user);
	}
	@Override
	public List<Usermodel> getUsers() {
		
		return repo.findAll();
	}
	@Override
	public Usermodel updateById(long id, Usermodel user) {
		Usermodel oldUser=repo.findById(id).get();
		oldUser.setName(user.getName());
		oldUser.setEmail(user.getEmail());
		oldUser.setPassword(user.getPassword());
		oldUser.setConfirm_password(user.getConfirm_password());
		oldUser.setRole(user.getRole());
		return repo.save(oldUser);
	}
	@Override
	public String deleteById(long id) {
		repo.deleteById(id);
		return "deleted user succesfully";
	}
	@Override
	public List<Usermodel> findByName(String name) {
		
		return repo.findByName(name);
	}
	@Override
	public List<Usermodel> findByEmail(String email) {
		
		return repo.findByEmail(email);
	}
	@Override
	public boolean findByEmailAndPassword(String email, String password) {
		Usermodel user= repo.findByEmailAndPassword(email,password);
		
		return user!=null;
	}
	

}

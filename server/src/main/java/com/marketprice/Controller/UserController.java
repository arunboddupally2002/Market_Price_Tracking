package com.marketprice.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marketprice.Model.Usermodel;
import com.marketprice.Service.UserService_interface;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins= "http://localhost:5173")
public class UserController {
	@Autowired
	private UserService_interface service;
	
	 @PostMapping("/signup")
	 public Usermodel createUser(@RequestBody Usermodel user)
	 {
		 return service.createUser(user);
	 }
	 @GetMapping("/users")
	 public List<Usermodel> getUsers()
	 {
		 return service.getUsers();
	 }
	 @PutMapping("/update-user/{id}")
	 public Usermodel updateById(@PathVariable long id,@RequestBody Usermodel user)
	 {
		 return service.updateById(id,user);
	 }
	 
	 @DeleteMapping("/Delete/{id}")
	 public String delete(@PathVariable long id)
	 {
		 return service.deleteById(id);
	 }
	 @GetMapping("/name/{name}")
	 public List<Usermodel> findByName(@PathVariable String name)
	 {
		 return service.findByName(name);
	 }
	 @GetMapping("/email/{email}")
	 public List<Usermodel> findByEmail(@PathVariable String email)
	 {
		 return service.findByEmail(email);
	 }
	 @PostMapping("/login")
	 public boolean login(@RequestBody Usermodel user)
	 {
		 return service.findByEmailAndPassword(user.getEmail(),user.getPassword());
	 }
}

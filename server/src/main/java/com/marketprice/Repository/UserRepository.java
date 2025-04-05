package com.marketprice.Repository;

import java.util.List;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.stereotype.Repository;

import com.marketprice.Model.MarketPrice;
import com.marketprice.Model.Usermodel;
@Repository
public interface UserRepository extends  JpaRepository<Usermodel,Long>
{

	List<Usermodel> findByName(String name);

	Usermodel findByEmailAndPassword(String email, String password);

	List<Usermodel> findByEmail(String email);

}

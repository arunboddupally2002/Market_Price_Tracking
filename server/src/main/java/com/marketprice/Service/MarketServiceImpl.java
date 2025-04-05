package com.marketprice.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import com.marketprice.Model.MarketPrice;
import com.marketprice.Model.Usermodel;
import com.marketprice.Repository.MarketRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MarketServiceImpl implements Marketservice_interface
{
	@Autowired
	private MarketRepository dao;
	@Override
	public List<MarketPrice> getAll() {
		
		return dao.findAll();
	}
	@Override
	public MarketPrice getBy(long id) {
		
		Optional<MarketPrice> opt= dao.findById(id);
		return opt.get();
	}
	
//	@Override
//	public MarketPrice updateBy(MarketPrice marketprice, long id) {
//				MarketPrice mp=getBy(id);
//				mp.setCrop(marketprice.getCrop());
//				mp.setPrice(marketprice.getPrice());
//				mp.setLocation(marketprice.getLocation());
//				mp.setMarketName(marketprice.getMarketName());
//				return dao.save(mp);
//	}
	@Override
	public String deleteby(long id) {
		
		return "deleted succesfully";
	}
	@Override
	public List<MarketPrice> getBycrop(String crop) {
		
		return dao.findBycrop(crop);
	}
	@Override
	public List<MarketPrice> getByPrice(double price) {
		
		return dao.findByPrice(price);
	}
	@Override
	public List<MarketPrice> getByLocation(String location) {
		
		return dao.findByLocation(location);
	}
	@Override
	public List<MarketPrice> getByPriceGreaterthan(double price) {
		
		return dao.findBypriceGreaterThan(price);
	}
	@Override
	public List<MarketPrice> getByPricelessthan(double price) {
		
		return dao.findBypriceLessThan(price);
	}
	@Override
	public List<MarketPrice> getBycropandlocation(String crop, String location) {
		
		return dao.findByCropAndLocation(crop,location);
	}
	@Override
	public MarketPrice insertinto(MarketPrice marketprice) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<MarketPrice> getAll(Sort sort)
	{
		return dao.findAll(sort);
	}
	@Override
	public MarketPrice inserInTo(MarketPrice marketprice) {
		
		return dao.save(marketprice);
	}
	private boolean isAdmin(Usermodel user) {
        return user != null && "admin".equalsIgnoreCase(user.getRole());
    }
	@Override
	public MarketPrice updateBy(MarketPrice marketprice, long id, Usermodel user) {
		
		  if (!isAdmin(user)) {
	            throw new RuntimeException("Only admins can update market details");
	        }
		  
		  MarketPrice mp=getBy(id);
			mp.setCrop(marketprice.getCrop());
			mp.setPrice(marketprice.getPrice());
			mp.setLocation(marketprice.getLocation());
			mp.setMarketName(marketprice.getMarketName());
			return dao.save(mp);
	}
	
	
	}
	
	
	 
	
	 

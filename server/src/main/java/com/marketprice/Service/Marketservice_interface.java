package com.marketprice.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.multipart.MultipartFile;

import com.marketprice.Model.MarketPrice;
import com.marketprice.Model.Usermodel;

public interface Marketservice_interface {

	MarketPrice insertinto(MarketPrice marketprice);

	List<MarketPrice> getAll();

	MarketPrice getBy(long id);

	MarketPrice updateBy(MarketPrice marketprice, long id,Usermodel user);

	String deleteby(long id);

	List<MarketPrice> getBycrop(String crop);

	List<MarketPrice> getByPrice(double price);

	List<MarketPrice> getByLocation(String location);

	List<MarketPrice> getByPriceGreaterthan(double price);

	List<MarketPrice> getByPricelessthan(double price);

	List<MarketPrice> getBycropandlocation(String crop, String location);
	
	List<MarketPrice> getAll(Sort sort);

	MarketPrice inserInTo(MarketPrice marketprice);
	
	
	

	

}

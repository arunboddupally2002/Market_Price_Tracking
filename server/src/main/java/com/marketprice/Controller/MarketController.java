package com.marketprice.Controller;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.marketprice.Model.MarketPrice;
import com.marketprice.Model.Usermodel;
import com.marketprice.Service.Marketservice_interface;

@RestController
@RequestMapping("/market")
@CrossOrigin(origins = "http://localhost:5173")
public class MarketController {
	@Autowired
	private Marketservice_interface service;
	@GetMapping("/")
	public List<MarketPrice> get()
	{
		return service.getAll();
	}
	@GetMapping("/{id}")
	public MarketPrice getby(@PathVariable long id)
	{
		return service.getBy(id);
	}
	@PutMapping("/update/{id}")
	public MarketPrice update(@RequestBody MarketPrice marketprice, @PathVariable long id ,@RequestBody Usermodel user)
	{
		return service.updateBy(marketprice,id,user);
	}
	@DeleteMapping("/{id}")
	public String  delete(@PathVariable long id)
	{
		return service.deleteby(id);
	}
	@GetMapping("/crop/{crop}")
	public List<MarketPrice> getBycrop(@PathVariable String crop)
	{
		return service.getBycrop(crop);
	}
	@GetMapping("/price/{price}")
	public List<MarketPrice> getByPrice(@PathVariable double price)
	{
		return service.getByPrice(price);
	}
	@GetMapping("/location/{location}")
	public List<MarketPrice> getByLocation(@PathVariable String location)
	{
		return service.getByLocation(location);
	}
	@GetMapping("/pricegreaterthan/{price}")
	public List<MarketPrice> getBypriceGreterThan(@PathVariable double price)
	{
		return service.getByPriceGreaterthan(price);
	}
	@GetMapping("/pricelessthan/{price}")
	public List<MarketPrice> getBypriceLessthan(@PathVariable double price)
	{
		return service.getByPricelessthan(price);
	}
	@GetMapping("/cropandlocation/{crop}/{location}")
	public List<MarketPrice> getBycropAndLocation(@PathVariable String crop,@PathVariable String location)
	{
		return service.getBycropandlocation(crop,location);
	}
	@GetMapping("/sort")
	public List<MarketPrice> get(@RequestParam(defaultValue="id") String sortBy,
								 @RequestParam(defaultValue="asc")String sortDir)
	{
		Sort.Direction direction=sortDir.equalsIgnoreCase("asc")? Sort.Direction.ASC :Sort.Direction.DESC;
		Sort sort=Sort.by(direction,sortBy);
		return service.getAll(sort);
	}
	@PostMapping("/")
	public MarketPrice insertInTo(@RequestBody MarketPrice marketprice)
	{
		return service.inserInTo(marketprice);
	}
	    
}

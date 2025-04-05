package com.marketprice.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marketprice.Model.MarketPrice;
@Repository
public interface MarketRepository extends JpaRepository<MarketPrice,Long>
{

	List<MarketPrice> findBycrop(String crop);

	List<MarketPrice> findByPrice(double price);

	List<MarketPrice> findByLocation(String location);
	
	List<MarketPrice> findBypriceGreaterThan(double price);
	
	List<MarketPrice> findBypriceLessThan(double price);

	List<MarketPrice> findByCropAndLocation(String crop, String location);
	
	List<MarketPrice> findAll(Sort sort);
	
	

}

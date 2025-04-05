package com.marketprice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MarketPriceResponse {
	
	private String message;
    private String imageUrl;
    
	public MarketPriceResponse(String message, String imageUrl) {
		
		this.message = message;
		this.imageUrl = imageUrl;
	}


}

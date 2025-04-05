package com.marketprice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MarketPriceRequest {
	private String crop;
    private double price;
    private String marketName;
    private String location;
    private String imageBase64; // Base64 string for image
}

package sidedish.com.controller;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
import sidedish.com.controller.model.ProductMealTypeResponse;
import sidedish.com.domain.Product;

@Component
public class ProductsDtoMapper {

	public List<ProductMealTypeResponse> toProductsMealTypeResponseFromDomain(
		List<Product> products) {
		return products.stream()
			.map(this::toProductMealTypeResponseFromDomain)
			.collect(Collectors.toList());
	}

	private ProductMealTypeResponse toProductMealTypeResponseFromDomain(
		Product product) {
		return new ProductMealTypeResponse(
			product.getId(),
			product.getImages().get(0).getImageUrl(),
			product.getProductName(),
			product.getDescription(),
			product.getFixedPrice(),
			product.getOriginalPrice(),
			product.getDiscountPolicy().getPolicyName());
	}

}

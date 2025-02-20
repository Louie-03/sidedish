package sidedish.com.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sidedish.com.controller.model.ProductBasicTypeResponse;
import sidedish.com.controller.model.ProductDetailTypeResponse;
import sidedish.com.service.ProductsService;

@RestController
@RequestMapping("/api/products")
public class ProductsController {

	private final ProductsService productsService;

	public ProductsController(ProductsService productsService) {
		this.productsService = productsService;
	}

	@GetMapping
	public List<ProductBasicTypeResponse> findProductsMealType(
		@RequestParam String meal) {
		return productsService.findByMealType(meal);
	}

	@GetMapping("/{id}")
	public ProductDetailTypeResponse findById(@PathVariable Long id) {
		return productsService.findById(id);
	}

	@GetMapping("/best")
	public List<ProductBasicTypeResponse> findAllByBestCategory(
		@RequestParam String category) {
		return productsService.findAllByBestCategory(category);
	}

	@GetMapping("/recommendation")
	public List<ProductBasicTypeResponse> recommend() {
		return productsService.recommend();
	}
}

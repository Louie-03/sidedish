package sidedish.com.controller;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import sidedish.com.controller.model.auth.GitHubAccessToken;

@RestController
@RequestMapping("/api")
public class LoginController {

	@GetMapping("/login")
	public ResponseEntity githubLogin() {
		String clientId = "9819a665d5d8256d5ad6";
		String redirectUrl = "http://localhost:8080/api/login/callback";

		String location = "https://github.com/login/oauth/authorize"
			+ "?client_id=" + clientId
			+ "&redirect_url=" + redirectUrl;

		return ResponseEntity
			.status(HttpStatus.SEE_OTHER)
			.location(URI.create(location))
			.build();
	}

	@GetMapping("/login/callback")
	public Object login(@RequestParam String code, HttpSession session) {
		session.setAttribute("userId", 1L);
		String url = "https://github.com/login/oauth/access_token";
		String clientId = "9819a665d5d8256d5ad6";
		String clientSecret = "43febe0f4431951d8a8068a67deed528e94b85ff";

		MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
		headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);

		Map<String, String> params = new HashMap<>();
		params.put("code", code);
		params.put("client_id", clientId);
		params.put("client_secret", clientSecret);

		GitHubAccessToken accessToken = new RestTemplate()
			.postForEntity(url, new HttpEntity<>(params, headers), GitHubAccessToken.class)
			.getBody();

		System.out.println("accessToken = " + accessToken);

		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setBearerAuth(accessToken.getAccessToken());

		ResponseEntity<Object> userResponseEntity = new RestTemplate()
			.exchange("https://api.github.com/user", HttpMethod.GET,
				new HttpEntity<>(httpHeaders),
				Object.class);

		return userResponseEntity.getBody();
	}

}

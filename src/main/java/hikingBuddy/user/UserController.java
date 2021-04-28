package hikingBuddy.user;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    UserRepository userRepository;
    UserService userService;

}

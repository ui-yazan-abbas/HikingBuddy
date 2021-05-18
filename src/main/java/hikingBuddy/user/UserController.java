package hikingBuddy.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RequestMapping("/user")
@RestController
public class UserController {
    UserRepository userRepository;
    UserService userService;

    @Autowired
    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<User> getUser(Principal principal) {
        String userName = principal.getName();
        User user = userService.findUserByEmail(userName);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/{name}")
    public ResponseEntity<User> getUserByName(@PathVariable String name) {
        User user = userService.findUserByName(name);
        return ResponseEntity.ok(user);
    }

    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User updateUserData, Principal principal) {
        String userName = principal.getName();
        User user = userService.findUserByEmail(userName);
        updateUserData = userService.updateUser(user, updateUserData);
        userRepository.save(updateUserData);
        return ResponseEntity.ok(user);

    }

    @PutMapping("/{name}/follow")
    public ResponseEntity<User> updateFollowers(@RequestBody User updateUserData, @PathVariable String name) {

        User user = userService.findUserByName(name);
        user = userService.addFollower(updateUserData, user);
        userRepository.save(user);
        return ResponseEntity.ok(updateUserData);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(Principal principal) {
        String userName = principal.getName();
        User user = userService.findUserByEmail(userName);
        userRepository.delete(user);
    }
    /*
     * // @PutMapping("/follow") // public ResponseEntity<User>
     * followUser(@RequestBody User user, Principal // principal){ // String
     * userName = principal.getName(); // User wantToFollow =
     * userService.findUserByEmail(userName); // User toBeFollowed =
     * userService.findUserByEmail(user.getEmail()); //
     * toBeFollowed.addFollower(wantToFollow); // return
     * ResponseEntity.ok(toBeFollowed);
     * 
     * // }
     */

}

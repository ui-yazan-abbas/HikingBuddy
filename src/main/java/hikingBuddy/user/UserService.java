package hikingBuddy.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service()
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findUserByName(String name) {
        return userRepository.findByName(name);
    }

    public User updateUser(User user, User updatecurrentUser) {
        updatecurrentUser = user.setUpdateUser(updatecurrentUser);
        updatecurrentUser.setId(user.getId());
        updatecurrentUser.setComments(user.getComments());
        updatecurrentUser.setPosts(user.getPosts());
        updatecurrentUser.setFollowersList(user.getFollowersList());
        return updatecurrentUser;
    }

    public User addFollower(User updatecurrentUser, User user) {
        user.addFollower(updatecurrentUser);
        return user;
    }

    public void register(User user) {
        String encryptedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        userRepository.save(user);
    }

}

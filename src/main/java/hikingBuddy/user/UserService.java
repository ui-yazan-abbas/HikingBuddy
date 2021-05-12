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

    public User updateUser(User user, User updateUserData) {
        updateUserData = user.setUpdateUser(updateUserData);
        updateUserData.setId(user.getId());
        updateUserData.setComments(user.getComments());
        updateUserData.setPosts(user.getPosts());
        updateUserData.setFollowersList(user.getFollowersList());
        return updateUserData;
    }
    public User addFollower(User updateUserData, User user) {
        user.addFollower(updateUserData);
        return user;
    }

    public void register(User user) {
        String encryptedPass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        userRepository.save(user);
    }

}

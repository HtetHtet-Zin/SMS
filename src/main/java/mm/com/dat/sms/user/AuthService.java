/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.user;

import mm.com.dat.sms.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * AuthService Class.
 * <p>
 * </p>
 *
 * @author
 */
@Service
public class AuthService {

    @Autowired
    private UserMapper userMapper;

    public User authenticate(String username) {
        return userMapper.findUser(username);
    }
}

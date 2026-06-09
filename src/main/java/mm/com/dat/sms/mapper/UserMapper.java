/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.mapper;

import mm.com.dat.sms.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

/**
 * UserMapper Class.
 * <p>
 * </p>
 *
 * @author
 */
@Mapper
public interface UserMapper {

    UserDto findUser(@Param("username")String username);
}

/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.user;

import jdk.jfr.Name;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 * UserInfoBean Class.
 * <p>
 * </p>
 *
 * @author
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Component
@Scope("session")
@Name("UserInfoBean")
public class UserInfoBean extends BaseUserInfoBean implements Serializable {

    private static final long serialVersionUID = 2648847471695859952L;

    private String userId;

    private String loginName;

    private String fullName;

    private String language;

    private int roleId;
}

/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.user;

import jdk.jfr.Name;
import lombok.Data;
import org.springframework.context.annotation.Scope;

import java.io.Serializable;

/**
 * BaseUserInfoBean Class.
 * <p>
 * </p>
 *
 * @author
 */

@Data
@Scope("session")
@Name("BaseUserInfoBean")
public class BaseUserInfoBean implements Serializable {

    private static final long serialVersionUID = 2648847471695859952L;

    private String userId;

    private String userIdKey;

    private boolean isServiceStop;

    private boolean isDuplicate;
}

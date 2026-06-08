/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.menu;

import jdk.jfr.Name;
import lombok.Data;
import mm.com.dat.sms.user.UserInfoBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.converter.json.GsonBuilderUtils;

import java.io.Serializable;

/**
 * HomeMenuBean Class.
 * <p>
 * </p>
 *
 * @author
 */
@Name("HomeMenuBean")
@Scope("session")
@Data
public class HomeMenuBean implements Serializable {

    private boolean message;

}

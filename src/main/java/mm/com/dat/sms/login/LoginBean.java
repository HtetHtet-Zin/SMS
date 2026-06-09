/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.login;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.context.FacesContext;
import lombok.Getter;
import lombok.Setter;
import mm.com.dat.sms.user.AuthService;
import mm.com.dat.sms.dto.UserDto;
import mm.com.dat.sms.user.UserInfoBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Locale;
import java.util.ResourceBundle;


/**
 * LoginBean Class.
 * <p>
 * </p>
 *
 * @author hhz
 */

@Component
@Scope("session")
@Getter
@Setter
public class LoginBean implements Serializable {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserInfoBean UserInfoBean;

    private String username;
    private String password;
    private String language;

    public String login() {

        FacesContext context = FacesContext.getCurrentInstance();
        ResourceBundle bundle = ResourceBundle.getBundle("messages", Locale.ENGLISH);
        UserDto user = authService.authenticate(username);
        if (user != null && BCrypt.checkpw(password, user.getPassword())) {
            UserInfoBean.setLoginName(user.getLoginName());
            UserInfoBean.setFullName(user.getFullName());
            UserInfoBean.setRoleId(Integer.parseInt(user.getRoleId()));
            return "HomeDashBoard.xhtml?faces-redirect=true";

        } else {
            context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, bundle.getString("login.failed"), null));
            return null;
        }
    }

    public String loginCancel() {
        username ="";
        password ="";
        return null;
    }

    public String logout(){
        FacesContext.getCurrentInstance()
                .getExternalContext()
                .invalidateSession();

        return "/login.xhtml?faces-redirect=true";
    }

}
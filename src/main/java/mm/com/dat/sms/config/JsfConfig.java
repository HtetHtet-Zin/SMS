/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.config;

import jakarta.faces.webapp.FacesServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * JsfConfig Class.
 * <p>
 * </p>
 *
 * @author
 */
@Configuration
public class JsfConfig {
    @Bean
    public ServletRegistrationBean<FacesServlet> facesServlet() {
        ServletRegistrationBean<FacesServlet> bean =
                new ServletRegistrationBean<>(new FacesServlet(), "*.xhtml");
        bean.setLoadOnStartup(1);
        return bean;
    }
}

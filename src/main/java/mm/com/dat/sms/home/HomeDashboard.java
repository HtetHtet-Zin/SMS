/***************************************************************
 * Author       :	 
 * Created Date :	
 * Version      : 	
 * History  :	
 * *************************************************************/
package mm.com.dat.sms.home;

import lombok.Data;

import java.math.BigDecimal;

/**
 * home Class.
 * <p>
 * </p>
 *
 * @author
 */
@Data
public class HomeDashboard {

    private String fiscalYear;
    private int totalIssueShare;
    private BigDecimal curPrice;
    private int totalShareSold;
    private int totalShareAvi;
    private BigDecimal totalShrHdr;
    private BigDecimal totalRegMem;
    private BigDecimal totalBuyOdr;
    private BigDecimal totalSelOdr;
    private boolean hasRecord;
}

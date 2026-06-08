/*******************************************************************************
 * $Date : 2014-06-11
 * $Author : Moe Sat Aung
 * $Rev : 1.00 $ 
 * $Copyright (c) 2012 Daiwa Institute of Research Business Innovation Ltd.
 ******************************************************************************/

function radioButtonChange(obj)
{
	var selValue = obj.value;		
	
	if (selValue == "joint") {
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name1").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name2").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name3").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name4").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name5").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name6").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name7").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name8").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:name9").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc1").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc2").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc3").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc4").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc5").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc6").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc7").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc8").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:nrc9").value = "";
		
		
	}
	else if (selVale == "representative") {
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:businessName").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:ceoName").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:representativeCrc").value = "";
		document.getElementById("INDIVIDUAL_ACCOUNT_INPUT:companyAddress").value = "";
	}
}
function disableBtn()
{
	myButton.disable();
}
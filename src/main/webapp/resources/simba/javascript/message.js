/*******************************************************************************
 * $Date : 2013-10-01 $ 
 * $Author : Aung Kyaw Zaw $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Displaying Error background Color for Correlation Check.
 */
function messageCheck() {

	var errELs = document.getElementById("errorElementId").value;
	var el = errELs.split('|');

	for ( var i = 0; i < el.length; i++) {
		try {
			document.getElementById(el[i]).style.backgroundColor = "pink";
		} catch (error) {
		}
	}
	
}

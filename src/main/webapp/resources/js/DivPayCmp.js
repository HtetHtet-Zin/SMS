/*******************************************************************************
 * $Date : 2014-02-26 $ 
 * $Author : Thae Nu Khaing $ 
 * $Rev : 2.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
/*customOnload = function() {
 focusFieldByName("button", "divPayCmpBtn", "submit");
 };*/
/**
 * Focus on text box
 */
customOnload = function() {

	focusFieldByName("input", "divPayCmpBtn", "submit");
}

/**
 * Focus on button box
 */
$(document).keypress(
		function(event) {
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				document.getElementById(
						'DIVIDEND_PAYMENT_COMPLETE:divPayCmpBtn').click();
				return false;
			}
		});

function disableBtn() {
	myButton.disable();
}
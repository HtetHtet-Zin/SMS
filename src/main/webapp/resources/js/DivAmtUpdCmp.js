/*******************************************************************************
 * $Date : 2013-03-03 $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
customOnload = function() {

	focusFieldByName("button", "completeBtn", "submit");
}

/**
 * Focus on button box
 */
$(document).keypress(
		function(event) {
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				document.getElementById(
						'DIVIDEND_AMOUNT_UPDATE_COMPLETE:completeBtn').click();
				return false;
			}
		});

function disableBtn() {
	myButton.disable();
}
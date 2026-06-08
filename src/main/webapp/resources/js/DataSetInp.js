/*******************************************************************************
 * $Date : 2014-08-01 $ 
 * $Author : Aye Aye Maw $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2014 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * trigger the button enter key event.
 */
$(document).keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		document.getElementById('BuyOrdInp:buyInpConfirmBtn').click();
		return false;
	}
});

function disableBtn() {
	myButton.disable();
}
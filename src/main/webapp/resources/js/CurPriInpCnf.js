/*******************************************************************************
 * $Date : 2013-12-10 $ 
 * $Author : Thae Nu Khaing $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Enter Key Control.
 */
customOnload = function() {
	document.getElementById('CURRENT_PRICE_INPUT_CONFIRM:insertConfirmBtn')
			.focus();
};

function disableBtn() {
	myButton.disable();
}

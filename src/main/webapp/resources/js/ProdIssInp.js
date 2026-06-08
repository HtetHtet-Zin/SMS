/*******************************************************************************
 * $Date : 2013-11-14 $ 
 * $Author : Phyo Thinza Ko $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

/**
 * Focus on text box
 */
function onload() {
	
}

/**
 * Enter Key Control.
 */
function onkeydown(){
	if(event.srcElement){
		// When type is "submit", "button" or "textarea", Enter-Key is enable.
		if(event.srcElement.type != "submit" && event.srcElement.type != "button" && event.srcElement.type != "textarea"){
			// KeyCode:13(Enter-Key)
			if (event.keyCode == 13) { 
				// Click the button that has id of "changeBtn".
				clickById("insertBtn");
				return false;
			}
		}
	}
}

function removeRedBox()
{  
    $(".ui-state-error").removeClass("ui-state-error");  
} 
function disableBtn()
{
	myButton.disable();
}
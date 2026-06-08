/*******************************************************************************
 * $Date : 2014-03-03 $ 
 * $Author : Hsu Min Htet $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

customOnload = function(){	
	focusFieldByName("button", "deleteBtn","submit"); 
}

function onkeydown(){
	if(event.srcElement){
		// When type is "submit", "button" or "textarea", Enter-Key is enable.
		if(event.srcElement.type != "submit" && event.srcElement.type != "button" && event.srcElement.type != "textarea"){
			// KeyCode:13(Enter-Key)
			if (event.keyCode == 13) { 
				// Click the button that has id of "changeBtn".
				clickById("deleteBtn");
				return false;
			}
		}
	}

}
function disableBtn()
{
	myButton.disable();
}
/**
 * 
 */
/*
customOnload = function(){	

	focusFieldByName("input", "comfirmButton","submit"); 
	
};
function onkeydown(){
	if(event.srcElement){
		// When type is "submit", "button" or "textarea", Enter-Key is enable.
		if(event.srcElement.type != "submit" && event.srcElement.type != "button" && event.srcElement.type != "textarea"){
			// KeyCode:13(Enter-Key)
			if (event.keyCode == 13) { 
				// Click the button that has id of "searchBtn".
				clickById("comfirmButton");
				return false;
			}
		}
	}
};*/
/**
 * Focus on text box
 */

customOnload = function() {

	document.getElementById('CERTIFICATE_DAMAGE_AND_LOST:comfirmButton')
			.focus();

};
/**
 * Enter Key Control.
 */
function onkeydown() {
	if (event.srcElement) {
		// When type is "submit", "button" or "textarea", Enter-Key is enable.
		if (event.srcElement.type != "submit"
				&& event.srcElement.type != "button"
				&& event.srcElement.type != "textarea") {
			// KeyCode:13(Enter-Key)
			if (event.keyCode == 13) {
				// Click the button that has id of "changeBtn".
				clickById("comfirmButton");
				return false;
			}
		}
	}
}

function disableBtn() {
	myButton.disable();
}

/*******************************************************************************
 * $Date : 2013-12-01 $ 
 * $Author : Ye` Win $ 
 * $Rev : 1.00 $ 
 * Copyright (c) 2013 DIR-ACE Technology Ltd. All Rights Reserved.
 ******************************************************************************/

var customOnload = null;

function messageCheck() {

	var errELs = document.getElementById("errorElementId").value;
	var el = errELs.split('|');

	for ( var i = 0; i < el.length; i++) {
		try {
			document.getElementById(el[i]).style.borderColor = "red";
		} catch (error) {
		}
	}
	
}



/**
 * 
 * 
 **/
function loadCommon(){	
	
	
    if ( customOnload != null ) {
    	
    	messageCheck();
        customOnload();
    }
    
    
}

/**
 * Java Script
 */
customOnload = function() {
	
};

/**
 * Use for focus on field by name.
 * 
 * @param tagName
 * @param fieldName
 * @param fieldType
 * @return
 **/
function focusFieldByName(tagName, fieldName, fieldType) {
	var fields = document.getElementsByTagName(tagName);
	var reg = new RegExp(fieldName+"$");
	for (var i = 0; (i < fields.length) && (fields != null) ;i++) {
		var myField = fields[i];
		if (fields[i].type == fieldType) {
			if(myField.id.match(reg) && !myField.disabled) {
				document.getElementById(myField.id).focus();
				return;
			}
		}
	}
}

 /**
  * Use for focus on field by name.
  * Use for combo focus
  * @param tagName
  * @param fieldName
  * @return	
  **/
 function focusTagByName(tagName, fieldName) {
 	var fields = document.getElementsByTagName(tagName);
 	var reg = new RegExp(fieldName+"$");
    for (var i = 0; i < fields.length; i++) {
    	var fieldId = fields[i].id;
    	if(fieldId.match(reg) != null && fieldId.match(reg) != "") {    		
    		
    		try {
    			
    			
    			    document.getElementById(fieldId).focus();
    			
    			
    			/*document.getElementById(fieldId).style.display = ''; // show container
        		select.focus(); // IE thinks element is hidden
*/    			} catch(err){
    				return false;
    			}    		    		
    		
    		return;
    	}
    }
 }
 
 /**
  * Click by id.
  * Use for button Enter Key event.
  * 
  * @return
  */
 function clickById(id) {
	  var fields = document.getElementsByTagName("input");
	  var reg = new RegExp(id+"$");
	  for (var i = 0; i < fields.length;i++) {
		  var myField = fields[i];
		  if (fields[i].type == "submit" || fields[i].type == "button") {
			  if(myField.id.match(reg) ) {
				  myField.click();
				  return;
			  }
		  }
	  }
}

 /**
  * Menu Loading time waiting to avoid conversation end.
  * @param value
  */
 function hideContent(value)
 {
     if (value) {
         document.getElementById('mainContent').style.display = 'none';
         } else {
         	document.getElementById('mainContent').style.display = 'block';
             }

 }
 function disableBtn()
 {
 	myButton.disable();
 }
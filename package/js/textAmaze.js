function textAmaze(){

	/*******************************
	
				variables
				
	*******************************/
	
	var time ;
	var animationName ;
//	var container;
	var animationObjectState = "true";
	var thisInterval;
	var interval = true;
	var childTag;
	
	var background ;
	var color;
	var padding;
	var fontFamily;
	var fontSize;
	var transition;
	var animationIterationCount;
	
	
	/*******************************
	
		    function begins
				
	*******************************/
	
	
	this.config = function(element, animationSettings, styles){
		
	var iterator = 0;
		
	animationObjectState = jQuery.isEmptyObject(animationSettings);
		

	//elements	
	var elementName = element;
	var elementTag = $(elementName);
	
	initializeCssValues();
	getCssValues();	
	
		
	if(!animationObjectState){	
		
	  animationObjectNotEmpty(); 
		
	 }
		
	 else{
		//deafult values   
		  
	   time = 100;
	   animationName = "rotateIn"; 
		 
	 }
		
	valueModifier();	
			
	setInterval(function(){
		 libraryLogic();
		 iterator++;
	 },time);
		
		
		
	function animationObjectNotEmpty(){
		
		 
	 time = animationSettings.time;
		
	 animationName = animationSettings.animationName;
	// container = animationSettings.parent;	
	
     errorHandling();		
	  
		
	}	
		
	function valueModifier(){
		
		 childTag = "span";
		
		// using span will eliminate the requirement of giving addition style of inline-block to the children of targeted element
		
		//trimed values which the element has
		var elementValue = elementTag.text().trim();
	
		
		
		
		//initialised
		var modifiedValue=" ";
		
		
		for(var i=0; i<elementValue.length; i++){
			
				 modifiedValue += "<"+childTag+">"+ elementValue[i] +"</"+childTag+">";
				
		}
			
		
		elementTag.html(modifiedValue);
		
	}
		
	function libraryLogic(){
		
			var elementRef = $(element + " " + childTag+":nth-child("+iterator+")");
			
			var cssTemplate = animationName + " " + "animated";
		
			
			
			elementRef.addClass(cssTemplate);
			
			elementRef.css({
				
				"background":background,
				"color":color,
				"padding":padding,
				"font-family":fontFamily,
				"transition":transition,
				"animation-iteration-count": animationIterationCount
				
				
			});
		
			
		
	}
		
	
	function getCssValues(){
		
		background = styles.background;
		color = styles.color;
		padding = styles.padding;
		fontFamily = styles.fontFamily;
		transition = styles.transition;
		animationIterationCount = styles.animationIterationCount;
		
	}	
		
	
	function initializeCssValues(){
		
		/*background, color, font-size, padding, transition*/
		
		background = getDef("background");
		color = getDef("color");
		padding = getDef("padding");
		fontFamily = getDef("font-family");
		transition = getDef("transition");
		animationIterationCount = getDef("animation-iteration-count");
		
	}
		
	function getDef(prop){
		return elementTag.css(prop);
	}	
	
	}
	

	
	function errorHandling(){
		
		if(checkUndefined(animationName)){
		   throwError("AnimationName cannot be left undefined");
		}
		
		if(checkUndefined(time)){
		   throwError("Time cannot be left undefined");
		  }
		
	}
	
	
	
}



function checkUndefined(property){

	if(property == undefined){
	   return true;
	}
	return false;
}

function throwError(errorMsg, errorVariable){
	
	throw new Error(errorMsg);
	
}


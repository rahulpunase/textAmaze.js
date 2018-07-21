# textAmaze

The js library which allows you to make your text more sassy in just a few lines of code.

### Main JS File

You can find the main js file under the package/js or download zip file of the repository.
You can also get to the raw file directly by clicking on [this link](https://raw.githubusercontent.com/Ronak99/textAmaze.js/gh-pages/js/textAmaze.js).

## What do you need to do

Once you get hold of the textAmaze.js make sure to include the two other dependecies on your project before including textAmaze.js

### Dependencies

~~~ html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
~~~

~~~ html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
~~~

-----------

#### Include textAamze
~~~ html
<script src="textAmaze.js"></script>
~~~

#### Initialize textAmaze
~~~javascript
var textAmaze = new textAmaze();
~~~

#### Configure the config function

##### Definiton of the config function

The config function takes three arguments:
1. targetElement : The element whose text is to be animated.
2. animationSettings : An object which defines the various animationSettings.
3. styles : An object by which you could apply styles on the text within target element.

~~~javascript

function config(targetElement, animationSettings[Object], styles[Object]){
  ...
}

~~~

#### To configue

~~~javascript

//NOTE : make sure to use just the name of the class or id with the symbol and not $("#targetElement")

var targetElement = "#targetElement";

//animationNames come in from the animated.css, go check out that website and try 
//to apply those animations here

		
		var targetElement = "#targetElement";

		var animationSettings = 
		  {
		  "animationName":"bounceIn",
		  "time":"100",
		  }

		var styles = {
			 "color":"blue",
			 "animationIterationCount":"infinite"
			 }
  
		 textAmaze.config(targetElement, animationSettings, styles); 
~~~

-----------------

## Demo

Have a look at the demo working of this library. [Click here](https://ronak99.github.io/textAmaze.js/index.html)

## Precautions

1. Every letter thats inside the target element is converted into a block display, you have to explicity apply an inline-block property to the div's inside the targetElement

~~~css
#targetElement div{
  display:inline-block;
}
~~~

2. To provide spaces between the words, use '&nbsp' , as the inline-block property forces the div's to stick together.

###### Hope someone comes along the way and helps me out in fixing those limitations.






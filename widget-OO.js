/** we will sstart with a widget class that will contain the base behaviour of a button */

//parent class

function Widget(width, height){ //this function will assign width and height values to properties on an object
    this.width = width || 50; //if the widht of the button is specified , use that width, otherwise use 50 as the widht
    this.height= height || 50;
    this.$elem = null;//this element will hold the text in the button and it is null here
}

Widget.prototype.render=function($where){
    if (this.$elem){
        this.$elem.css({
            width:this.width + 'px',
            height:this.height + 'px'
        }).appendTo($where)
    }
};

//child class

function Button(width, height, label){
    Widget.call(this, width, height);//super constructor call
    this.label = label || "Default"//if label is specified, use it, otherwise , use "Default"
    this.$elem= $("<button>").text(this.label);
}

//make 'Button' "inherit" from "Widget"
Button.prototype = Object.create(Widget.prototype);

//override base "inherited" 'render()'
Button.prototype.render = function($where){
    Widget.prototype.render.call(this, $where);
    this.$elem.click(this.onClick.bind(this));
};

Button.prototype.onClick= function(evt){
    console.log("Button '" + this.label + " ' clicked!")
}

$(document).ready(function(){
    var $body = $(document.body);
    var btn1 = new Button(125, 30, "Hello");
    var btn2= new Button(150, 40, "World")
})


/**In line 32, we are overidind the render behaviour found in widget
 * but notice in line 33, we still have access to that behaviour 
 * except that we have extra functionality in line 34
 */



/**notice that in line 23, we are overriding the base behaviour in
 * widget. We are making the general behaviour of Widget to be still
 * available to Button
  */


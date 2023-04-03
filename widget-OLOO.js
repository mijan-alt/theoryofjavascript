var Widget = {
    init: function(width, height){ //function that assigns width and height values to their respective object properties
        this.width = width || 50;  //if  width is given, use that width, otherwise use 50
        this.height = height || 50;
        this.$elem = null;

    }
}
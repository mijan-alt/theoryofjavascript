class Widget {
    constructor(width, height){
        this.width= width || 50;
        this.height = height || 50;
        this.$elem = null;
    }
    render($where){
        if (this.$elem){
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where)
        }
    }
}

class Button extends Widget {
    constructor(width, height, label){
        super (width, height);
        this.label = label 
    }
}
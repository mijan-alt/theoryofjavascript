Foo = {
    init: function(who){
        this.me = who;
    },

    identify: function(){
        return "I am " + this.me;
    }
};

Bar= Object.create(Foo);

Bar.speak = function(){
    alert("Hello, " + this.identify() + "."
    );
}

var b1 = Object.create(Bar);

b1.init("b1");

var b2= Object.create(Bar);
b2.init("b2")



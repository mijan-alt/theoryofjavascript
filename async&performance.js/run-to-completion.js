var a = 1;
var b = 2;
function foo() {
 a++;//a=2
 b = b * a;//b=4
 a = b + 3;//a=7
 
}
function bar() {
 b--; //b=3
 a = 8 + b;//a=11
 b = a * 2;//b=22
 }

foo();
bar();
console.log(a);//11
console.log(b);//22

/**this program show us the asynchronous nature of javascript or the single threaded nature
 * line 1 through 2 executes now which makes it synchronous.
 * the foo function(line3 - line 8) and the bar function(line 9 -13)
 * are asynchronous because there is a gap between their execution
 * time. bar has to wait for foo to run completely before it runs.
 * this is referred to as run-to-completion in javascript
 */

import{Add} from './script1.mjs'





var y = 'global';
console.log('value of Y in global scope:',y);

function value(){
    var y = "functional";
    console.log('valueof y in Functional scope:',y);
    {
        let y = "block";
        console.log('value of y in block scope:',y);
    }
    var y ="lexical";
    console.log('value of Y in lexical scope:',y);
}
value();
function sum(a,b){
    return a+b;
    
};
console.log(sum(10,5));


let z= [2,4,5,6,8,4];
console.log(Add(...z));
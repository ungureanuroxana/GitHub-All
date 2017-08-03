var aritmetica = function(){
    var sum = function(a,b, c){
        return a+b+c;
    };
    var diff = function(a,b){
        return a-b;
    };
    var mul = function(a,b){
        return a*b;
    };
    var div = function(a,b){
        return a/b;
    };

    return{
        'adunare': sum,
        'inmultire': mul,
        'impartire': div,
        'scadere': diff
    }
};

//cum este folosit:
var a = aritmetica();
a.adunare(2,4);
var b=a;
console.log(a);

b.help =  'functions available "adunare", "impartire", "inmultire", "scadere"';
console.log(b);

var c = Object.create(a);
c.x = "acesta este doar in variabila c";
console.log(c);
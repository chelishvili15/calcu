//1
document.querySelector("#b1").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b1").value
})
//2
document.querySelector("#b2").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b2").value
})
//3
document.querySelector("#b3").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b3").value
})
//4
document.querySelector("#b4").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b4").value
})
//5
document.querySelector("#b5").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b5").value
})
//6
document.querySelector("#b6").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b6").value
})
//7
document.querySelector("#b7").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b7").value
})
//8
document.querySelector("#b8").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b8").value
})
//9
document.querySelector("#b9").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("b9").value
})
//0
document.querySelector("#zero").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("zero").value
})
//plus
document.querySelector("#plus").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("plus").value
})
//mult
document.querySelector("#mult").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("mult").value
})
//divi
document.querySelector("#divi").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("divi").value
})
//dot
document.querySelector("#dot").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("dot").value
})
//minus
document.querySelector("#minus").addEventListener("click", function(){
        document.getElementById("output").value += document.getElementById("minus").value
})
//equal
document.querySelector("#equal").addEventListener("click", function(){
        document.getElementById("output").value = eval(document.getElementById("output").value)
})
//clean
document.querySelector("#C").addEventListener("click", function(){
        document.getElementById("output").value = "";
        document.getElementById("output2").value = "";
})
//back
document.querySelector("#B").addEventListener("click", function(){
        var str=document.getElementById("output").value;
        str = str.slice(0, str.length-1);
        document.getElementById("output").value = str;
})


document.querySelector("#mtavari").addEventListener("click", function(){
        if (document.getElementById("output").value)
        {
        document.getElementById("output2").value = eval(document.getElementById("output").value)
        }
})



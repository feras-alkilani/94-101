/*

document.getElementsByTagName('div')[0].onclick = function(){
    

    console.log( " Tbis is " + typeof document.getElementsByTagName('div')[0].nodeName);
};
document.getElementsByTagName('span')[0].onclick = function(){
    

    console.log( " Tbis is " + typeof document.getElementsByTagName('span')[0].nodeName);
};
document.getElementsByTagName('p')[0].onclick = function(){
    

    console.log( " Tbis is " + typeof document.getElementsByTagName('p')[0]);
};
document.getElementsByTagName('article')[0].onclick = function(){
    

    console.log( " Tbis is " + typeof document.getElementsByTagName('article')[0]);
};
document.getElementsByTagName('section')[0].onclick = function(){
    

    console.log( " Tbis is " + typeof document.getElementsByTagName('section')[0]);
};
*/



/*

var x = document.getElementById("feras").tagName;
console.log(x);

*/

var x1 = document.getElementsByTagName("div")[0];
x1.onclick = function(){
    console.log("This is" + " "  +x1.tagName);
};

var x2 = document.getElementsByTagName("span")[0];
x2.onclick = function(){
    console.log("This is" +  " " + x2.tagName);
};

var x3 = document.getElementsByTagName("p")[0];
x3.onclick = function(){
    console.log("This is" +  " " + x3.tagName);
};

var x4 = document.getElementsByTagName("article")[0];
x4.onclick = function(){
    console.log("This is" +  " " + x4.tagName);
};

var x5 = document.getElementsByTagName("section")[0];
x5.onclick = function(){
    console.log("This is" +  " " + x5.tagName);
};


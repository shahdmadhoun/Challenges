var myArray1 = [4, 5, -5, 2, -7, 8, 0, -34 ];
var myArray2 = [2, 3 ,4, 6, 90];

function Challenge1(array) {

    var pos = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            pos.push(array[i]);
        }
    }
    return pos;

}
document.getElementById("Challenge1").innerHTML =Challenge1(myArray1);

function Challenge2(arr1,arr2) {

    return arr1.concat(arr2);

}
document.getElementById("Challenge2").innerHTML =Challenge2(myArray1,myArray2);

var obj = {
    "name": "shahd",
    "age": "20"
 };
 
 var found = Object.keys(obj).filter(function(key) {
   return obj[key] === 'shahd';
 });
 
 if (found.length) {
    document.getElementById("Challenge3").innerHTML ="found";
 } else document.getElementById("Challenge3").innerHTML ="Not found";


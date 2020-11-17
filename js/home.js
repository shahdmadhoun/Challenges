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

 function Challenge4(type) {
    if (type instanceof Array) {
        document.getElementById("Challenge4").innerHTML ="This is Array";
      } else {
        document.getElementById("Challenge4").innerHTML ="This is Not Array";
      }
}
Challenge4(myArray1);

const str = 'my name is shahd madhoun';

function Challenge5(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 
 document.getElementById("Challenge5").innerHTML =Challenge5(str);

 function Challenge6(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};
document.getElementById("Challenge6").innerHTML =Challenge6(myArray1);


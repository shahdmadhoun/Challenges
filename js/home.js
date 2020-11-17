var myArray = [4, 5, -5, 2, -7, 8, 0, -34 ];

function Challenge1(array) {

    var pos = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            pos.push(array[i]);
        }
    }
    return pos;

}
document.getElementById("Challenge1").innerHTML =Challenge1(myArray);


var arr1 = [2, 3 ,4, 6, 90];
var arr2 = [20, 43, 5, -22, 0];
document.getElementById("Challenge2").innerHTML =arr1.concat(arr2);

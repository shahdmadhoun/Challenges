var myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];

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



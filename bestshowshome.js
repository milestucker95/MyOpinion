// JavaScript source code

//The Office Button
$('#theofficebutton').click(function () {
    $('#theofficecomment').toggle();
    $('#theofficebutton').html('Submit');
});

//Stranger Things Button
$('#strangerthingsbutton').click(function () {
    $('#strangerthingscomment').toggle();
    $('#strangerthingsbutton').html('Submit');

});


//Narcos Button
$('#narcosbutton').click(function () {
    $('#narcoscomment').toggle();
    $('#narcosbutton').html('Submit');

});

//Orange is... Button
$('#orangebutton').click(function () {
    $('#orangecomment').toggle();
    $('#orangebutton').html('Submit');

});

//Arrays for both the comment boxes and their corresponding button
var boxArray = ['theofficecomment', 'strangerthingscomment', 'narcoscomment', 'orangecomment'];
var buttons = ['theofficebutton', 'strangerthingsbutton', 'narcosbutton', 'orangebutton'];

window.addEventListener('mouseup', function (event) {
    for (var i = 0; i < boxArray.length; i++) {
        var box = document.getElementById(boxArray[i]);
        if (event.target != box && event.target.parentNode != box) {
            box.style.display = 'none';
        }
    }

    for (var i = 0; i < buttons.length; i++) {
        var button = document.getElementById(buttons[i]);
        button.innerHTML = 'Comment';

    }
});


//For when comment button opens the comment box
function officeempty() {
    var x;
    x = document.getElementById("theofficecomment").value;
        if (x == "") {
            //alert("Enter a Valid Roll Number");
            return false;
        };
   
}

function narcosempty() {
    var x;
    x = document.getElementById("narcoscomment").value;
    if (x == "") {
        //alert("Enter a Valid Roll Number");
        return false;
    };

}

function strangerthingsempty() {
    var x;
    x = document.getElementById("strangerthingscomment").value;
    if (x == "") {
        //alert("Enter a Valid Roll Number");
        return false;
    };

}

function orangeempty() {
    var x;
    x = document.getElementById("orangecomment").value;
    if (x == "") {
        //alert("Enter a Valid Roll Number");
        return false;
    };

}

//Playing around with the DOM
var headerTitle = document.getElementById('article-title');
headerTitle.style.borderBottom = 'solid 10px white';
//headerTitle.innerHTML = '<h5>New Title</h5>';

var stuff = document.getElementsByClassName('generaltoppicks');


// JavaScript source code

console.log(document.title);



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

var headerTitle = document.getElementById('article-title');
headerTitle.style.borderBottom = 'solid 10px white';
//headerTitle.innerHTML = '<h5>New Title</h5>';

var stuff = document.getElementsByClassName('generaltoppicks');
// console.log(stuff);
// console.log(stuff[i]);
// stuff[1].textContent = 'Hello 2';

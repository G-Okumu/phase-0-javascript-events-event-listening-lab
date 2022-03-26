function alertMe() {
    alert("Hurray! am really working!");
}

function addingEventListener() {
    let input = document.getElementById("input");
    input.addEventListener('click', alertMe);
}
// const input = document.getElementById('input');
// input.addEventListener('click', function() {
//     alert('I was clicked!');
// });
// document.getElementById('input').addEventListener('click', function() {
//     alert('I was clicked!');
// });


// document.getElementById('input').addEventListener('click', alertMe);
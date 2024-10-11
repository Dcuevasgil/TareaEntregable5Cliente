document.querySelector('rojo').addEventListener('click', function() {
    changeTheme('red', 'pink');
});

document.querySelector('azul').addEventListener('click', function() {
    changeTheme('blue', 'lightblue');
});

document.querySelector('verde').addEventListener('click', function() {
    changeTheme('green', 'lightgreen');
});

document.querySelector('reset').addEventListener('click', function() {
    changeTheme('black', 'white');
});

function changeTheme(backgroundColor, textColor) {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
}
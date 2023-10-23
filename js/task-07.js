const inputRange = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


inputRange.addEventListener('input', onRange);

function onRange(event) {
   textSize.style.fontSize = event.currentTarget.value + 'px';
}
// Selector

// var firstItem = document.getElementsByClassName('list')[0].firstElementChild,
//   secondItem = document.getElementsByClassName('list')[0].children[1],
//   lastItem = document.getElementsByClassName('list')[0].lastElementChild;

// gsap.from('.title', { opacity: 0, y: -50 });
// gsap.from(lastItem, { opacity: 0, y: -50 });

//Callback
// gsap.from('.title', {
//   opacity: 0,
//   x: -50,
//   onStart: onStart,
//   onUpdate: onUpdate,
//   onComplete: onComplete
// });

// function onStart() {
//   console.log('animation started');
// }

// function onUpdate() {
//   console.log('progress');
// }

// function onComplete() {
//   console.log('animation completed');
// }

// timeline
var tl = gsap.timeline();
var firstItem = document.getElementsByClassName('list')[0].firstElementChild,
  secondItem = document.getElementsByClassName('list')[0].children[1],
  lastItem = document.getElementsByClassName('list')[0].lastElementChild;

tl.from('.title', { opacity: 0, y: -50 })
  .from('.subTitle', { opacity: 0, x: -50 })
  .from('.anim1', { opacity: 0, x: -50 })
  .from('.wrapper', { opacity: 0, x: 50 })
  .from(firstItem, { opacity: 0, y: -50 }, '+=0.5')
  .from(secondItem, { opacity: 0, y: -50 }, '+=0.5')
  .from(lastItem, { opacity: 0, y: -50 }, '+=0.5');
tl.pause();

document.getElementById('onPlay').addEventListener('click', function() {
  tl.play();
});
document.getElementById('onPause').addEventListener('click', function() {
  tl.pause();
});

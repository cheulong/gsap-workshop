var firstItem = document.getElementsByClassName('list')[0].firstElementChild,
  secondItem = document.getElementsByClassName('list')[0].children[1],
  lastItem = document.getElementsByClassName('list')[0].lastElementChild;

gsap.from('.title', { opacity: 0, y: -50 });
gsap.from(lastItem, { opacity: 0, y: -50 });

let navItems = document.querySelectorAll('.nav-item');

let timer = 10000;

// stagger animation that enlarges each nav item briefly
setInterval(() => {
  navItems.forEach((item, index) => {
    let delay = index * 200;
    item.style.animation = `pulse ${timer}ms ease-in-out ${delay}ms infinite`;
  });
}, timer);
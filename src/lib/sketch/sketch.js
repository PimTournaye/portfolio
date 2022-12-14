// ADAPTED FROM https://editor.p5js.org/kwertyops/sketches/V7RIjyVpd

let single;
let interval;
let chord;

let note;

// select color with array index so we can switch it up later
export const sketch = (p5) => {
  let lightColors = ["#E83C28", '#091C44', '#F4B800', '#3772FF', '#034C3C', '#222222']
  let darkColors = ['#BE1E2D', '#21409A', '#FFDE17', '#034732', '#387D7A', '#DBD4D3']
  let width = document.querySelector('main').clientWidth;
  let height = window.innerHeight - document.querySelector('main').clientHeight - document.querySelector('footer').clientHeight - 100;

  let seed;
  let vector;


  const makeVector = (notes) => {
    
  }

  const splatter = (vec, color) => {
    //TODO - make this p5.random range based of the canvas size
    vec.x += p5.random(-15, 15);
    vec.y += p5.random(-15, 15);
    for (let i = 0; i < 80; i++) {
      seed += .01;
      let x = vec.x * (0.5 - p5.noise(seed + i));
      let y = vec.y * (0.5 - p5.noise(seed + 2 * i));
      let s = 150 / p5.dist(vec.x, vec.y, x, y);
      if (s > 20) s = 20;
      let a = 255 - s * 5;
      p5.noStroke();
      color.p5.setAlpha(a);
      p5.fill(color);
      p5.ellipse(x, y, s);
      seed += .01;
    }
  }

  function stipple(vec, color) {
    p5.noStroke();
    p5.fill(color);
    let radius = p5.random(3, 12);
    p5.ellipse(vec.x + p5.random(-30, 30), vec.y + p5.random(30, -30), radius);
    radius = p5.random(3, 12);
    p5.ellipse(vec.x + p5.random(-30, 30), vec.y + p5.random(30, -30), radius);
  }

  p5.setup = () => {
    p5.createCanvas(width, height);
    seed = p5.random(1000);
    p5.background(0, 0);
    p5.noStroke()

  };

  p5.draw = () => {

  }

  };
};
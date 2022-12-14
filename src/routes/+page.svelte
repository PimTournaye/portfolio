<script>
	import P5 from "p5-svelte";

  //import play from "../lib/music/Tone";

  const sketch = (p5) => {
    let width = document.querySelector('main').clientWidth;
    let height = window.innerHeight - document.querySelector('main').clientHeight - document.querySelector('footer').clientHeight - 100;
    console.log(height);
		p5.setup = () => {
			p5.createCanvas(width, height);
      
			p5.background(0, 0);
			p5.stroke('#ed225d');
		};

		p5.draw = () => {
      // draw a circle divided in 12 parts
      let radius = height / 2;
      let angle = 360 / 12;
      let x = p5.width / 2;
      let y = p5.height / 2;
      p5.translate(x, y);
      p5.rotate(p5.frameCount / 100);
      for (let i = 0; i < 12; i++) {
        p5.rotate(p5.radians(angle));
        p5.line(0, 0, radius, 0);
      }


		};
	};
</script>
<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="flex flex-col">
  <section class="flex flex-row mb-8">
    <div
      class="basis 1/3 w-80 h-80 rounded-full 
		md:rounded-full"
    >
      <img
        src="portfolio pic- avatar.png"
        alt="A portrait of Pim"
        class="object-cover rounded-full ring-2 max-w-s ring-white"
      />
    </div>
    <div class="basis-2/3 ml-16">
      <h1 class="font-bold text-7xl flex mx-auto mb-4">Hey, I'm Pim</h1>
      <h2 class="text-xl">
        I am a creative coder, improviser and musician that is passionate about all things that
        around play with forms of interaction.
        <br /><br />
        Aiming to create experiences that leave long lasting impressions and inspire others.
      </h2>
    </div>
  </section>

  <P5 {sketch}/>
</div>

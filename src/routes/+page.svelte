<script>
	import P5 from 'p5-svelte';

	/**
	 * @type {{ baseY: any; color: string; segments: { x: any; y: any; }[]; }[]}
	 */
	let lines = [];
	let margin = 20;
	let timerDuration = 10000;
	let yRange = 50;
	let backgroundColor = '#EADCCF';
	let totalLines = 100;
	let totalSegments = 20;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(window.innerHeight, window.innerWidth);
			p5.background(backgroundColor);

			// draw 500 lines spread out over height of the canvas, with a margin of 20
			for (let i = 0; i < totalLines; i++) {
				// Get the Y position of the line based on the height of the canvas
				let y = p5.map(i, 0, totalLines, 0 + margin, p5.height - margin);
				let color = 'black';
				let segments = [];
				// Break the line into 100 segments
				for (let j = 0; j < totalSegments; j++) {
					// Get the X position of each segment based on the width of the canvas
					let x = p5.map(j, 0, totalSegments, 0 + margin, p5.width - margin);
					// Push an object to the segments array with the x and y positions
					segments.push({
						x: x,
						y: y
					});
				}
				// Add the line to the array of lines
				lines.push({
					baseY: y,
					color: color,
					segments: segments
				});
			}
		};

		p5.draw = () => {
			// Clear the background
			p5.background(backgroundColor);
			// Select the current segment based on the current time
      let currentSegment = Math.floor(
        p5.map(p5.millis(), 0, timerDuration, 0, totalSegments)
      );
			// Offset the Y value based on the mouse Y position
			let y = p5.map(p5.mouseY, 0, p5.height, -yRange, yRange);
			// Adjust the Y value of the current segment
			lines.forEach(line => {
			  line.segments[currentSegment].y = line.baseY + y;
			})


			// Draw all the lines
			lines.forEach((line) => {
				// Set up a variable to remember the current segment to connect it to the next one
				let lastSegment = { x: 0 + margin, y: line.baseY };
				// Draw all the line segments
				line.segments.forEach((segment) => {
					// Get the color of the line segment
					p5.stroke(line.color);

					// Draw a line from the last segment to the current one
					p5.line(lastSegment.x, lastSegment.y, segment.x, segment.y);

					// Remember current segment position
					lastSegment = segment;
				});
			});
		};
	};
</script>

<div>
  <h1>PIM TOURNAYE</h1>
  <h2>Creative Technologist, Improviser, Artist</h2>
</div>

<P5 {sketch} />


<style lang="postcss">

</style>
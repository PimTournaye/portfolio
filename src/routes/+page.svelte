<script>
	// @ts-nocheck
	import P5 from 'p5-svelte';
	let w, h;

	export const sketch = (p5) => {
		// Global variables
		const timer = 5000;
		let startTime;

		let lines = [];
		const numSegments = 200;
		const numLines = 50;
		const colors = ['008D59', '091C44', '6D388A', 'E83C28', 'F19001', 'F4B800'];

		const margin = 100;
		let offsetNoiseRange = 20;

		let animationMode = false;

		// Generate perlin noise with amplitude
		// the amplitude is based on the mouseY position
		// and the range of the amplitude decreases as the timer counts down
		// The noise is generated based on the y position of the line and the frameCount
		// the offset that this is noise generated must be within a certain range
		// Once animationMode is true, we stop generating nosie and just use the static noise value
		const generateNoise = (y) => {
			if (!animationMode) {
				// Clamp mouseY influence to 0 -10
				const mouse = p5.constrain(p5.mouseY, 0, 1);
				const noise = p5.noise(y / 100, p5.frameCount / 100);
				const amplitude = p5.map(p5.mouseY *0.07, 0, p5.height, 0, 100);
				return noise * amplitude;
			} else {
				const noise = p5.noise(y / 100, p5.frameCount / 100);
				const offset = p5.map(p5.mouseX, 0, p5.width, 0, offsetNoiseRange);
				return noise * offset;
			}
		};

		class Line {
			constructor(baseY) {
				this.baseY = baseY;
				this.segments = [];
				this.color = this.getColor();
				this.currentSegment;
				this.lastSegment;
			}

			// get a random color from the colors array... or not
			getColor() {
				// 50% chance of getting a random color or black
				if (p5.random() > 0.5) {
					return p5.random(colors);
				} else {
					return '000000';
				}
			}

			// create segments based on the width of the canvas and the number of segments
			createSegments() {
				const segmentWidth = w / numSegments;
				for (let i = 0; i < numSegments; i++) {
					this.segments.push({
						x: i * segmentWidth,
						y: this.baseY,
						baseY: this.baseY
					});
				}
			}

			// The initial stage of drawing the lines, before settling into the static state
			drawInitial() {
				// set up the stroke
				p5.stroke('black');
				p5.strokeWeight(2);
				// draw the line segments
				if (this.lastSegment === undefined)
					this.lastSegment = { x: 0, y: this.baseY, baseY: this.baseY };
				this.segments.forEach((segment) => {
					// set the current segment
					this.currentSegment = segment;
					// get the noise value
					const noise = generateNoise(segment.y);
					// Offset the y position of the segment by the noise value
					segment.y += noise;
					// Draw a line from the last segment to the current segment
					p5.line(this.lastSegment.x, this.lastSegment.y, segment.x, segment.y);
					// Set the last segment to the current segment
					this.lastSegment = this.currentSegment;
				});
			}

			// The static state of the lines, where they are not moving, frozen in time.
			drawStatic() {
				// set up the stroke
				p5.stroke(`#${this.color}`);
				p5.strokeWeight(2);
				// draw the line segments
				if (this.lastSegment === undefined) this.lastSegment = { x: 0, y: this.baseY };
				this.segments.forEach((segment) => {
					// set the current segment
					this.currentSegment = segment;
					p5.line(this.lastSegment.x, this.lastSegment.y, segment.x, segment.y);
					// Set the last segment to the current segment
					this.lastSegment = this.currentSegment;
				});
			}

			draw() {
				if (!animationMode) this.drawInitial();
				else this.drawStatic();
			}
		}

		p5.setup = () => {
			// Create the canvas
			p5.createCanvas(w, h);

			// get the Y offset for baseY based on the number of lines and the height of the canvas with margin
			const yOff = (h - margin * 2) / numLines;
			// Generate the Lines
			for (let i = 0; i < numLines; i++) {
				const baseY = margin + i * yOff;
				const line = new Line(baseY);
				line.createSegments();
				lines.push(line);
			}

			// Start the timer
			startTime = p5.millis();
			console.log(lines);
			console.log(lines[0].segments[0]);
		};

		p5.draw = () => {
			p5.background('#EADCCF');
			// Check if the timer has elapsed
			if (p5.millis() > startTime + timer) animationMode = true;

			// Draw all the lines
			lines.forEach((line) => {
				line.draw();
			});
		};
	};
</script>

<section class="h-screen w-full overflow-y-hidden">
	<div id="name">
		<h1>PIM TOURNAYE</h1>
		<h2>Creative Technologist, Improviser, Artist</h2>
	</div>

	<div class="grow w-full" bind:clientWidth={w} bind:clientHeight={h}>
		<P5 {sketch} />
	</div>
</section>

<style lang="postcss">
	#name {
		@apply py-8;
		@apply flex flex-col text-right;
	}

	div {
		@apply flex flex-col items-end;
	}

	section {
		@apply flex flex-col justify-between px-8;
		@apply bg-bright-background;
	}

	h1 {
		@apply text-6xl md:text-7xl lg:text-8xl font-bold text-black text-right font-sans;
	}

	h2 {
		@apply text-2xl md:text-3xl lg:text-4xl font-bold text-black text-right font-mono;
	}
</style>

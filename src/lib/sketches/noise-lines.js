import { get } from "svelte/store";
import { canvas } from ""


// @ts-nocheck
export const sketch = (p5) => {
  // Global variables
  const timer = 5000;
  let startTime;

  let lines = [];
  const numSegments = 200;
  const numLines = 20;
  const colors = ["008D59", "091C44", "6D388A", "E83C28", "F19001", "F4B800"];

  const margin = 100;

  let animationMode = false;

  // Generate perlin noise with amplitude
  // the amplitude is based on the mouseY position
  // and the range of the amplitude decreases as the timer counts down
  const generateNoise = (y) => {
    let amplitude = p5.map(p5.mouseY, 0, h, 0, 100);
    amplitude = p5.map(p5.millis(), startTime, startTime + timer, amplitude, 2);
    return p5.map(p5.noise(y / 100, p5.frameCount / 100), 0, 1, -amplitude, amplitude);
  }

  class Line {
    constructor(baseY) {
      this.baseY = baseY
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
        return "000000";
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
      if (this.lastSegment === undefined) this.lastSegment = { x: 0, y: this.baseY, baseY: this.baseY };
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
        // get the noise value
        const noise = generateNoise(segment.y);
        // Draw a line from the last segment to the current segment
        p5.line(this.lastSegment.x, this.lastSegment.y, segment.x, segment.y + noise);
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
    p5.createCanvas(w, h, get(canvas));

    // get the Y offset for baseY based on the number of lines and the height of the canvas with margin
    const yOff = (h - margin * 2) / numLines;
    // Generate the Lines
    for (let i = 0; i < numLines; i++) {
      const baseY = margin + i * yOff;
      lines.push(new Line(baseY));
    }

    // p5.createCanvas(w, h)

    // Start the timer
    startTime = p5.millis();
  }

  p5.draw = () => {
    // Check if the timer has elapsed
    if (p5.millis() > startTime + timer) animationMode = true;



    // Draw all the lines
    lines.forEach((line) => {
      line.draw();
    });
  }
}
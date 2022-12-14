
import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();
const reverb = new Tone.Reverb().toDestination();
const env = new Tone.Envelope({
	attack: 0.1,
	decay: 0.2,
	sustain: 0.5,
	release: 0.8,
}).toDestination();
env.triggerAttackRelease(0.5);

synth.connect(reverb);

export default function play(note, length) {
	synth.triggerAttackRelease(note, length)
}


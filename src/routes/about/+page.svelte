<script context="module">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// // @ts-ignore
	// import { browser, dev } from '$app/env';
	// import SkillIcon from '$lib/components/SkillIcon.svelte';

	// // we don't need any JS on this page, though we'll load
	// // it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// // ...but if the client-side router is already loaded
	// // (i.e. we came here from elsewhere in the app), use it
	// export const router = browser;

	// // since there's no dynamic data here, we can prerender
	// // it so that it gets served as a static asset in prod
	// export const prerender = true;
</script>


<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<h1>About me, Pim</h1>
	<p id="part-one" class="text-roman white-text">
		You know how some things in life just really rub off on you? Jazz was one of those things for
		me. The spirit of the music, of improvisation and a continual <span
			class="text-bright-bau-yellow dark:text-bau-yellow">conversation</span
		>
		is something I really internalized throughout my studies. I believe that conversation perpetuates
		in everything. Design, coding,
		<span class="yellow-text">conceptualization and ideation</span>, walking, the way you open your
		window to look outside. You name it, there's continuous movement, tension and release. One thing
		that immensely enhances that social aspect is interactivity, and it continues to facinate me
		endlessly. Hi again, I'm <span class="red-text">Pim Tournaye</span>, a student from Brussels.
		Someone with a large background in social music, arts and a knack for design thinking, vision,
		development and experimentation. I like involving people and building experiences that are
		unforgettable.
	</p>
</section>

<section>
	
	<h2>Skills</h2>
	<p>Here's what I can do and what I'm learning in the fields I'm interested in.</p>

	<h3>Coding</h3>
	<div class="flex">
		<SkillIcon name="JavaScript" level={85}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
		<SkillIcon name="TypeScript" level={55}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
		<SkillIcon name="Python" level={35}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
		<SkillIcon name="C" level={35}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
		<SkillIcon name="Rust" level={5}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
		
		<SkillIcon name="Haskell" level={5}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
	</div>
	
	<h3>Web</h3>
	<div class="flex">
		
		<SkillIcon name="Node.js" level={70}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
		<SkillIcon name="D3.js" level={30}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>

		<SkillIcon name="HTML" level={60}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>

		<SkillIcon name="CSS" level={40}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>

		<SkillIcon name="Svelte" level={30}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>

		<SkillIcon name="React" level={20}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>

		<SkillIcon name="p5.js" level={60}
		svg="https://blindedcyclops.neocities.org/p5js-icons/p5-sq-reverse-filled.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>

		<SkillIcon name="MongoDB" level={35}
		svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
		text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
		/>
	</div>

	<h3>AI & IoT</h3>


	<h3>Physical Prototyping</h3>
	<SkillIcon name="Arduino" level={70}
	svg="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
	text="I have a strong grasp on JavaScript. It's my primary programming language and continues to be my choice of preferece to make projects with."
	/>

	<h3>Design</h3>

	


</section>

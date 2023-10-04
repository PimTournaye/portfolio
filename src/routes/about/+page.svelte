<script>
	import AboutCard from '../../lib/components/AboutCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { artDesign, coding, soft } = data.skills;

	console.log(data);
</script>

<section class="flex flex-col pr-4">
	<section class="flex flex-row space-x-8 justify-end">
		<div class="flex flex-col space-y-2 w-1/2">
			<h1 class="about-title">Hi, I'm Pim</h1>
			<p class="about-desc">
				Creative coder exploring the intersection of technology and art. Recently completed a
				professional bachelor's degree with distinction in Multimedia & Creative Technologies.
				Currently expanding this education part-time in the arts at NYU's IMA Low Res program.
				Passionate about innovative projects combining design and technology. Specialized in
				creative coding, interaction design, and conceptual development.
			</p>
			<div class="top-btns">
				<a href="mailto:pimtournaye1@gmail.com">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path
							d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"
						/></svg
					>
					<button class="btn btn-primary">Contact me</button>
				</a>
				<a href="https://www.linkedin.com/in/pimtournaye/">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path
							d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"
						/></svg
					>
					<button class="btn btn-secondary">LinkedIn</button>
				</a>
				<a href="CV 2023.pdf">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path
							d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"
						/></svg
					>
					<button class="btn btn-secondary">CV</button>
				</a>
			</div>
		</div>

		<img src="profile-pic.png" alt="A portrait of Pim" class="about-img" />
	</section>

	<section class="mt-8">
		<h2>Coding.</h2>
		<div class="skill-section">
			{#each coding as { name, category, text, icon }}
				<AboutCard {name} {category} {text} {icon} />
			{/each}
		</div>

		<h2>Art & Design.</h2>
		<div class="skill-section">
			{#each artDesign as { name, category, text, icon }}
				<AboutCard {name} {category} {text} {icon} />
			{/each}
		</div>

		<h2>Soft.</h2>
		<div class="skill-section">
			{#each soft as { name, category, text, icon }}
				<AboutCard {name} {category} {text} {icon} />
			{/each}
		</div>
	</section>
</section>

<style lang="postcss">
	/* Top part of the page */
	.about-title {
		@apply text-xl md:text-2xl lg:text-4xl font-medium font-mono;
		@apply text-white text-right;
	}

	.about-desc {
		@apply text-sm md:text-base lg:text-lg font-light font-mono;
		@apply text-timberwolf text-right;
	}

	.about-img {
		@apply xl:max-w-lg lg:max-w-md md:max-w-sm sm:max-w-xs;  
    @apply lg:rounded-lg lg:rounded-br-[120px];
		@apply rounded-lg rounded-bl-[120px];
	}

	.top-btns {
		@apply flex flex-row space-x-4 justify-end pt-2 self-end;
	}

	a {
		@apply flex flex-row space-x-4 items-center justify-center;
		@apply bg-bright-background hover:bg-timberwolf bg-opacity-80 hover:bg-opacity-100;
		@apply transition duration-300 ease-in-out;
		@apply px-4 py-2 rounded-lg min-w-[160px];
	}

	svg {
		@apply w-10 h-10;
		@apply text-white;
	}

	/* Skills and interests section */
	h2 {
		@apply text-xl md:text-2xl lg:text-3xl font-medium font-mono;
		@apply text-white text-left;
		@apply mb-4;
	}

	.skill-section {
		@apply grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3;
		@apply gap-4;
		@apply mb-8;
	}
</style>

<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Random from '$lib/Random/index.svelte';
</script>

<svelte:head>
	<title>xRandom - Lucky Number Generator</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<img src="xrandom.png" alt="xrandom" />
			</picture>
		</div>
        <br/>
        Find your lucky number
	</h1>
	<Random />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
        font-weight: normal;
		text-align: center;
        color: var(--text-color);
	}
</style>

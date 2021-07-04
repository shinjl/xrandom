<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
    <div class="footer-info">
        <div>xRandom - A Simple Random Number Generator</div>
        <div><a href="https://shinjl.com" target="_blank">SHINJL.COM</a></div>
    </div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer div {
		text-align: center;
        padding: 1rem 0 0;
	}

    footer a {
		font-weight: bold;
	}

    .footer-info {
        color: #aaaaaa;
    }

    a {
        color: #999999;
        text-decoration: none;
    }

    a:hover {
        color: var(--accent-color);
    }

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

<script lang="ts">
	import { spring } from 'svelte/motion';

	let luckyNumber = 0;

	const displayedLuckyNumber = spring();
	$: displayedLuckyNumber.set(luckyNumber);
	$: offset = modulo($displayedLuckyNumber, 1);

	const modulo = (n: number, m: number) => {
		return ((n % m) + m) % m;
	};

	const generateLuckyNumber = () => {
		luckyNumber = Math.floor((Math.random() * 1000));
	};

    generateLuckyNumber();
</script>

<div class="random">
	<div class="random-viewport">
		<div class="random-digits" style="transform: translate(0, {100 * offset}%)">
			<strong style="top: -100%" aria-hidden="true">{Math.floor($displayedLuckyNumber + 1)}</strong>
			<strong id="lucky-number">{Math.floor($displayedLuckyNumber)}</strong>
		</div>
	</div>

	<button id="lucky-button" on:click={generateLuckyNumber} aria-label="Generate your lucky number">
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M22.6597 28.2925C22.5391 28.6159 22.7034 28.9759 23.0269 29.0965L28.2597 31.0491C25.8053 32.8053 22.9159 33.7347 19.8834 33.7347C11.935 33.7347 5.46875 27.2681 5.46875 19.3197C5.46875 18.9747 5.18875 18.6947 4.84375 18.6947C4.49875 18.6947 4.21875 18.9747 4.21875 19.3197C4.21875 27.9572 11.2459 34.9847 19.8834 34.9847C22.9225 34.9847 25.8291 34.1253 28.3556 32.4953L27.3909 37.0425C27.3194 37.38 27.535 37.7119 27.8725 37.7834C27.9163 37.7928 27.9597 37.7972 28.0028 37.7972C28.2919 37.7972 28.5513 37.5956 28.6134 37.3015L30.0791 30.3937L23.4634 27.9256C23.1409 27.8053 22.7806 27.9691 22.6597 28.2925ZM20.1172 5.10061C17.0772 5.10061 14.1703 5.95967 11.6453 7.58905L12.6097 3.0428C12.6813 2.70498 12.4659 2.37342 12.1281 2.30186C11.7916 2.2303 11.4584 2.44592 11.3872 2.78373L9.92156 9.69123L16.5372 12.1594C16.6091 12.1862 16.6831 12.199 16.7556 12.199C17.0091 12.199 17.2472 12.0434 17.3413 11.7922C17.4619 11.469 17.2975 11.1087 16.9741 10.9881L11.7406 9.03498C14.1937 7.27936 17.0834 6.3503 20.1175 6.3503C28.0656 6.3503 34.5316 12.8162 34.5316 20.7644C34.5316 21.1094 34.8116 21.3894 35.1566 21.3894C35.5016 21.3894 35.7816 21.1094 35.7816 20.7644C35.7812 12.1275 28.7544 5.10061 20.1172 5.10061Z" fill="#848484"/>
		</svg>
	</button>
</div>

<style>
	.random {
		display: flex;
		margin: 1rem 0;
	}

	.random button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--text-color);
		background-color: transparent;
		color: var(--text-color);
		font-size: 2rem;
		border-radius: 50%;
		margin-left: 3rem;
		cursor: pointer;
	}

	.random button:hover {
		border: 1px solid var(--accent-color);
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 1px;
		stroke: var(--text-color);
	}

	.random-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.random-viewport strong {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--accent-color);
		font-size: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.random-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>

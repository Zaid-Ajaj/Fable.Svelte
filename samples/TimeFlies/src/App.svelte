<script>
	// @ts-check
	import { store } from "./App";
</script>

<style>
	.reaction-app {
		font-family: Consolas, monospace;
		height: 100px;
	}
	.reaction-app span {
		position: fixed;
	}
</style>

<div class="reaction-app">
	{#each [...$store.letters] as [idx, letter] (idx)}
		<span style="top:{letter.y}px; left:{letter.x}px">{letter.char}</span>
	{/each}
	<p>fps: {$store.fps}</p>
</div>

<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="grid grid-cols-12 md:gaps-x-16 bg-whisper min-h-screen">
	<Navbar />
	<main class="px-4 pt-4 col-span-12 ml-6 md:col-span-8 md:pt-10">
		<slot>Fallback for dash</slot>
	</main>
</div>

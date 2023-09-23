<script>
	import Search from '$lib/Icon/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mr-2 text-pastelPurple mt-auto"><Search /></div>
	<input
		type="text"
		placeholder="Search by keyword"
		name="search"
		class="w-full lg:w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif lg:text-xl text-base text-black outline-none focus:border-b-lavenderIndigo focus:border-solid"
	/>
	<button class="font-sansSerif lg:text-xl text-lg font-black text-pastelPurple">Search</button>
</div>

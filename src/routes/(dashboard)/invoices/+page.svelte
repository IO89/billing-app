<script>
	import Search from '$lib/components/Search.svelte';
	import Tag from "$lib/components/Tag.svelte";
	import View from "$lib/Icon/View.svelte";
	import More from "$lib/Icon/More.svelte";
	import CircleAmount from "$lib/components/CircleAmount.svelte";
</script>

<svelte:head>
	<title>Invoices | Akira puppy love</title>
</svelte:head>

<div class="flex justify-between items-center mb-16">
	<Search />
	<!--  New Invoices -->
	<div>
		<button class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all">+ Invoices</button>
	</div>
</div>

<!--list of invoices-->
<div>
	<!--  header  -->
	<div class="table-header invoice-table text-daisyBush ">
		<h3>Status</h3>
		<h3>Due data</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
	</div>
	<!--  invoices -->
	<div class="invoice-table items-center bg-white py-6 rounded-lg shadow-tableRow">
		<div><Tag label="paid"/></div>
		<div class="text-lg">19.9.2023</div>
		<div class="text-lg">12345</div>
		<div class="text-xl font-bold">Flamingo client</div>
		<div class="text-lg font-mono font-bold">1000$</div>
		<div class="text-lg center"><a href="#" class="text-pastelPurple hover:text-daisyBush"><View/></a></div>
		<div class="center text-lg"><button class="text-pastelPurple hover:text-daisyBush"><More/></button></div>
	</div>
</div>

<CircleAmount label="Total" amount="1000$" />

<style lang="postcss">
	.table-header h3{
		@apply text-xl font-black leading-snug
	}
</style>

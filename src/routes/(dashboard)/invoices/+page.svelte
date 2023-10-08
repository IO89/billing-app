<script lang='ts'>
	import { invoices, loadInvoices } from '$lib/stores/invoiceStore';
	import Search from '$lib/components/Search.svelte';
	import CircleAmount from '$lib/components/CircleAmount.svelte';
	import { onMount } from 'svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import { sumInvoices } from '$lib/utils/moneyHelpers';
	import { centsToDollars } from '$lib/utils/moneyHelpers.js';

	onMount(() => {
		loadInvoices();
		console.log($invoices);
	});
</script>

<svelte:head>
	<title>Invoices | Akira puppy love</title>
</svelte:head>

<div
	class='flex flex-col-reverse md:flex-row items-start md:items-center justify-between lg:mb-16 mb-7 gap-y-6 md:gap-y-4'
>
	<Search />
	<!--  New Invoices -->
	<div>
		<button
			class='relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 lg:px-10 py-2 lg:py-3 font-sansSerif text-base lg:text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all'
		>+ Invoices
		</button
		>
	</div>
</div>

<!--list of invoices-->
<div>
	<!--  header  -->
	<div class='invoice-table table-header hidden lg:grid text-daisyBush'>
		<h3>Status</h3>
		<h3>Due date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3 class='text-right'>Amount</h3>
		<div />
		<div />
	</div>
	{#each $invoices as invoice}
		<InvoiceRow {invoice} />
	{/each}
</div>

<CircleAmount label='Total' amount=${centsToDollars(sumInvoices($invoices))} />

<style lang='postcss'>
    .table-header h3 {
        @apply text-xl font-black leading-snug;
    }
</style>

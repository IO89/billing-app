<script>
	import Search from '$lib/components/Search.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import View from '$lib/Icon/View.svelte';
	import More from '$lib/Icon/More.svelte';
	import CircleAmount from '$lib/components/CircleAmount.svelte';
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
		<h3>Amount</h3>
		<div />
		<div />
	</div>
	<!--  invoices -->
	<div
		class='invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow'
	>
		<div class='status'>
			<Tag className='ml-auto lg:ml-0' label='paid' />
		</div>
		<div class='text-sm lg:text-lg dueDate'>19.9.2023</div>
		<div class='text-sm lg:text-lg invoiceNumber'>12345</div>
		<div class='text-base lg:text-xl font-bold clientName'>Flamingo client</div>
		<div class='text-sm text-right lg:text-lg font-mono font-bold amount'>1000$</div>
		<div class='text-sm lg:text-lg center viewButton hidden lg:block'>
			<a href='#' class='text-pastelPurple hover:text-daisyBush'>
				<View />
			</a>
		</div>
		<div class='center text-lg moreButton hidden lg:block'>
			<button class='text-pastelPurple hover:text-daisyBush'>
				<More />
			</button>
		</div>
	</div>
</div>

<CircleAmount label='Total' amount='1000$' />

<style lang='postcss'>
    .table-header h3 {
        @apply text-xl font-black leading-snug;
    }

    .invoice-row {
        grid-template-areas:
			'invoiceNumber invoiceNumber'
			'clientName amount'
			'status dueDate';
    }

    @media (min-width: 1024px) {
        .invoice-row {
            grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
        }
    }

    .invoice-row .status {
        grid-area: status;
    }

    .invoice-row .dueDate {
        grid-area: dueDate;
    }

    .invoice-row .clientName {
        grid-area: clientName;
    }

    .invoice-row .amount {
        grid-area: amount;
    }

    .invoice-row .viewButton {
        grid-area: viewButton;
    }

    .invoice-row .moreButton {
        grid-area: moreButton;
    }

    .invoice-row .invoiceNumber {
        grid-area: invoiceNumber;
    }
</style>

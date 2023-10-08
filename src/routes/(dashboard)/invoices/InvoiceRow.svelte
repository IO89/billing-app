<script lang='ts'>
	import Tag from '$lib/components/Tag.svelte';
	import View from '$lib/Icon/View.svelte';
	import More from '$lib/Icon/More.svelte';
	import type { Invoice } from '../../../global.d.ts';
	import { sumLineItems } from '$lib/utils/moneyHelpers';
	import { centsToDollars } from '$lib/utils/moneyHelpers.js';
	import { isLate } from '$lib/utils/dateHelpers';

	export let invoice: Invoice;

	const getInvoiceLabel = () => {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
			return 'sent';
		} else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
			return 'late';
		} else if (invoice.invoiceStatus === 'paid') {
			return 'paid';
		}
	};
</script>

<div
	class='invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow'
>
	<div class='status'>
		<Tag className='ml-auto lg:ml-0' label={getInvoiceLabel()} />
	</div>
	<div class='text-sm lg:text-lg dueDate'>{invoice.dueDate}</div>
	<div class='text-sm lg:text-lg invoiceNumber'>{invoice.invoiceNumber}</div>
	<div class='text-base lg:text-xl font-bold clientName whitespace-nowrap truncate'>{invoice.client.name}</div>
	<div
		class='text-sm text-right lg:text-lg font-mono font-bold amount'>
		${centsToDollars(sumLineItems(invoice.lineItems))}</div>
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

<style lang='postcss'>
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

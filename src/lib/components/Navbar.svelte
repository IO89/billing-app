<script lang="ts">
	import { page } from '$app/stores';
	import Close from '$lib/Icon/Close.svelte';
	import Hamburger from '$lib/Icon/Hamburger.svelte';

	let isNavShowing = false;
</script>

<svelte:head>
	{#if isNavShowing}
		<style>
			body {
				@apply overflow-hidden md:overflow-auto;
			}
		</style>
	{/if}
</svelte:head>

<!--mobile nav control-->
<button
	class="z-navBarToggle fixed right-6 top-6 md:hidden"
	on:click={() => {
		isNavShowing = !isNavShowing;
	}}
	class:text-goldenFizz={isNavShowing}
	class:text-daisyBush={!isNavShowing}
>
	{#if isNavShowing}
		<Close width="32" height="32" />
	{:else}
		<Hamburger width="32" height="32" />
	{/if}
</button>

<header
	class="fixed z-navBar transition-transform md:h-full md:relative -translate-x-full md:translate-x-0 w-full h-screen md:col-span-3 bg-daisyBush text-center"
	class:translate-x-0={isNavShowing}
>
	<div>
		<a href="/invoices"><img src="/images/logo.svg" alt="Akira Puppy Love" class="mx-auto" /></a>
	</div>
	<nav>
		<ul class="list-none text-2xl font-bold">
			<li><a class:active={$page.url.pathname === '/invoices'} href="invoices">Invoices</a></li>
			<li><a class:active={$page.url.pathname === '/clients'} href="clients">Clients</a></li>
			<li><a class:active={$page.url.pathname === '/settings'} href="#">Settings</a></li>
			<li><a class:active={$page.url.pathname === '/logout'} href="#">Logout</a></li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	nav ul li {
		@apply mb-6;
	}
	nav ul li a {
		@apply font-bold text-white hover:text-goldenFizz;
	}
	nav ul li a.active {
		@apply text-robinEggBlue;
	}
</style>

<script lang='ts'>
	export let label: 'draft' | 'sent' | 'late' | 'paid' | 'archive' = 'draft';
	export let className = '';
</script>

<div
	class={`text-md w-20 rounded-full text-center font-bold capitalize border-1 ${className}`}
	class:inverted={label === 'draft'}
	class:success={label === 'sent' || label === 'current'}
	class:alert={label === 'late'}
	class:archive={label === 'paid' || label === 'archive'}
>
	{label}
</div>

<style lang='postcss'>
    .inverted {
        @apply border-pastelPurple text-pastelPurple;
    }

    .success {
        @apply border-robinEggBlue bg-robinEggBlue text-bluegem;
    }

    .alert {
        @apply border-scarlet bg-scarlet text-goldenFizz;
    }

    .archive {
        @apply border-pastelPurple bg-pastelPurple text-white;
    }
</style>

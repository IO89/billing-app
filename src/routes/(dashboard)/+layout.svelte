<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
</script>
<div class="grid grid-cols-12 md:gaps-x-16 bg-whisper min-h-screen">
    <Navbar/>
    <main class="col-span-12 cmd:col-span-8 md:pt-10"><slot>Fallback for dash</slot></main>
</div>


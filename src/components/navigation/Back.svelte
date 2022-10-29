<script lang="ts">
	import IconLeftArrow from '@components/icons/IconLeftArrow.svelte';

	export let height = 0;
</script>

<div>
  <a href="/" class="h-12 [&>svg]:h-4 flex gap-4 items-center mx-4 text-lg underline font-poppins-medium" bind:clientHeight={height}>
    <IconLeftArrow/>
    Home
  </a>
</div>
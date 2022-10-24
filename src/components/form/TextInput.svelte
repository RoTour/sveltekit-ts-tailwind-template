<script lang="ts">
	export let value = '';
	export let placeholder = '';
</script>

<div class="flex border border-black border-2 px-4 rounded-xl py-1 w-full">
  <slot/>
  <input bind:value={value} placeholder={placeholder} type="text"
         class="w-full focus-visible:outline-none"/>
</div>

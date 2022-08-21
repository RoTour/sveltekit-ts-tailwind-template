<script lang="ts">
  export let value = '';
  export let title = '';
	export let description = '';
</script>

<div class="flex flex-col justify-center items-stretch [&>p]:text-center font-bold">
  <p class="text-2xl bg-blue">{value}</p>
  <p class="text-2xl bg-blue">{title}</p>
  <p class="flex-1">{description}</p>
</div>
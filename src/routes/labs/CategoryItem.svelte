<script lang="ts">
	export let name = '';
</script>

<!--HitBox-->
<div class="[&_h2]:hover:opacity-100 [&_h2]:hover:ml-12 [&_span]:hover:w-[calc(100%_+_4rem)] [&>div]:hover:bg-gray-100 py-4">
  <div class="w-full cursor-pointer">
    <h2 class="opacity-50 lg:ml-0 transition-all duration-300 p-4 pl-16 relative w-fit">
    <span class="absolute top-0 -left-12 w-0 transition-all duration-300
    h-full bg-gradient-to-r from-secondary via-primary to-primary z-10 block"></span>
      <span class="z-20 relative">{name}</span>
    </h2>
  </div>
</div>

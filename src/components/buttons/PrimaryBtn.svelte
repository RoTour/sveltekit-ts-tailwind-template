<script lang="ts">
	export let click: () => void = () => null;
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let addClasses = '';
</script>

<button on:click={click}
        class="w-full md:w-max bg-gradient-to-r from-primary to-secondary rounded-xl text-white
               font-poppins-medium tracking-wider
               transition duration-300 ease-out hover:shadow-lg {addClasses} {' '}
               {size === 'sm' ? 'text-sm px-4 py-2' :
                size === 'md' ? 'text-md px-6 py-3' :
                size === 'lg' ? 'text-lg px-8 py-4' :
                size === 'xl' ? 'text-xl px-10 py-5':
                ''}"
>
  <slot/>
</button>
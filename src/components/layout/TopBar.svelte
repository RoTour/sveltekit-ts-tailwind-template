<script lang="ts">
	import ColorPalette from '../icons/ColorPalette.svelte';
	import { clickOutside } from '../../directives/click-outside';
	import { Themes,setTheme } from '../../stores/theme';

	let selectThemeOpened = false;

	const openSelector = () => {
		selectThemeOpened = true;
	};

	const closeSelector = () => {
		selectThemeOpened = false;
	};

</script>

<div class="w-full flex p-4 gap-4">
  <div class="flex-1"></div>
  <div class="flex flex-1 justify-end cursor-pointer">
    <div class="flex gap-2 relative" on:click={() => openSelector()}>
      <ColorPalette/>
      <p>Theme</p>
      <div use:clickOutside on:click_outside={closeSelector}
           id="dropdown"
           class="absolute content top-[150%] right-1 block border-2 border-emerald-400 rounded-lg shadow-lg p-1 w-max"
           style="display: {selectThemeOpened ? 'block' : 'none'}">
        <div class="grid grid-cols-4 gap-4 ">
          <div on:click={() => setTheme(Themes.green)} class="h-6 w-6 rounded-lg bg-emerald-400"></div>
          <div on:click={() => setTheme(Themes.red)} class="h-6 w-6 rounded-lg bg-red-500"></div>
          <div on:click={() => setTheme(Themes.blue)} class="h-6 w-6 rounded-lg bg-blue-400"></div>
          <div on:click={() => setTheme(Themes.amber)} class="h-6 w-6 rounded-lg bg-amber-300"></div>
        </div>
      </div>
    </div>
  </div>
</div>
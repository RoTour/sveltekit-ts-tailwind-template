<script lang="ts">
	import ColorPalette from '../icons/ColorPalette.svelte';
	import { clickOutside } from '../../directives/click-outside';
	import { Themes, setTheme } from '../../stores/theme';
	import Language from '../icons/Language.svelte';
	import { i18n, setLanguage } from '../../stores/translations.js';
	import FlagFR from "../icons/FlagFR.svelte";
	import FlagUS from "../icons/FlagUS.svelte";

	let selectThemeOpened = false;
	let selectLanguageOpened = false;

	const setThemeSelectorOpened = (newVal: boolean) => {
		selectThemeOpened = newVal;
	};

	const setLanguageSelectorOpened = (newVal: boolean) => {
		selectLanguageOpened = newVal;
	};


</script>

<div class="w-full flex p-4 gap-4">
  <div class="flex-1"></div>
  <div class="flex flex-1 justify-end cursor-pointer gap-4">
    <!--  Language  -->
    <div class="flex gap-2 relative" on:click={() => setLanguageSelectorOpened(true)}>
      <Language/>
      <p>{$i18n.topBar.language}</p>
      <div use:clickOutside on:click_outside={() => setLanguageSelectorOpened(false)}
           id="language-dropdown"
           class="absolute content top-[150%] right-1 block border-2 border-emerald-400 rounded-lg shadow-lg p-1 w-max"
           style="display: {selectLanguageOpened ? 'block' : 'none'}">
        <div class="grid grid-cols-2 gap-4 ">
          <div on:click={() => setLanguage('french')} class="h-6 w-6"><FlagFR/></div>
          <div on:click={() => setLanguage('english')} class="h-6 w-6"><FlagUS/></div>
        </div>
      </div>
    </div>

    <!--  Theme  -->
    <div class="flex gap-2 relative" on:click={() => setThemeSelectorOpened(true)}>
      <ColorPalette/>
      <p>{$i18n.topBar.theme}</p>
      <div use:clickOutside on:click_outside={() => setThemeSelectorOpened(false)}
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
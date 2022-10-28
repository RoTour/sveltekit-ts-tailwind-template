<script lang="ts">
	import SecondaryBtn from '@components/buttons/SecondaryBtn.svelte';
	import BgDecoration from '@components/background/BgDecoration.svelte';
	import { tweened } from 'svelte/motion';
	import { backIn } from 'svelte/easing';
	import { onMount } from 'svelte';

	const topDecorationX = tweened(0, { duration: 800, easing: backIn });
	const bottomDecorationX = tweened(0, { duration: 800, easing: backIn });
	const mainMenuOpacity = tweened(1, { delay: 300, duration: 800, easing: backIn });
	const mainMenuScale = tweened(1, { delay: 300, duration: 800, easing: backIn });

	let bodyRef;

	const animateExit = () => {
		topDecorationX.set(-150);
		bottomDecorationX.set(150);
		mainMenuOpacity.set(0);
		mainMenuScale.set(1.5);
	};

  onMount(() => {
			document.body.style.overflow = 'hidden';
  })

</script>


<BgDecoration posTop="0" posLeft="0" width="25vw" height="25vw" rotate="45deg" translateY="-55%"
              translateX={`${$topDecorationX}%`}/>
<BgDecoration posBottom="0" posRight="0" width="40vw" height="40vw" rotate="-135deg" translateY="60%"
              translateX={`${$bottomDecorationX}%`}/>


<section class="h-screen flex flex-col justify-center" style={`opacity: ${$mainMenuOpacity}; transform: scale(${$mainMenuScale})`}>
  <h1
    class="w-max mx-auto text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary mb-8">
    <span class="font-poppins-bold">Ro</span>
    <span class="font-poppins-bold text-black">::</span>
    <span class="font-poppins-bold">Tour</span>
  </h1>

  <div class="w-full p-4 md:w-1/2 lg:w-1/3 mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 ">
    <SecondaryBtn onClick={animateExit}>(🔨WIP) Projects</SecondaryBtn>
    <SecondaryBtn>(🔨WIP) Components</SecondaryBtn>
    <SecondaryBtn>(🔨WIP) Labs</SecondaryBtn>
    <SecondaryBtn onClick={() => console.log(bodyRef)}>(🔨WIP) Testing</SecondaryBtn>
  </div>
</section>
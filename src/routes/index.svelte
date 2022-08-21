<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Counter from '../components/Counter.svelte';
	import { i18n } from '../stores/translations.js';

	let scroll = 0;
	let windowHeight = 0;

	let counterSectionRef = null;
	let countersAnimated = false;
	let counter1 = tweened(0, { duration: 2000, easing: cubicOut, delay: 600 });
	let counter2 = tweened(0, { duration: 2500, easing: cubicOut, delay: 1000 });
	let counter3 = tweened(0, { duration: 60000, delay: 1400 });
	let counterTrollValue = '';

	const animateCounters = () => {
		counter1.set(60);
		counter2.set(6);
		counter3.set(100000).then(() => {
			counterTrollValue = $i18n.counters.so.counterTrollValue;
		});
	};

	$: if (!countersAnimated && counterSectionRef && counterSectionRef?.clientTop < scroll) {
		animateCounters();
	} else {
		console.log({ ...counterSectionRef });
  }

</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={windowHeight}/>

<section class="h-screen bg-gradient-to-b from-secondary via-secondary to-primary">
  <div class="w-full w-4/5">
    <h1 class="text-2xl text-primary">{$i18n.name}</h1>
    <h2>{$i18n.subtitle}</h2>
  </div>
</section>

<section class="bg-primary p-4" bind:this={counterSectionRef}>
  <div class="flex justify-between w-4/5 m-auto flex-col sm:flex-row gap-12 text-primary-text [&>div]:flex-1 items-start pt-12">
      <Counter value="{Math.round($counter1)}" title="{$i18n.counters.github.counterTitle}"
               description="{$i18n.counters.github.counterDescription}"/>
      <Counter value="{Math.round($counter2)}" title="{$i18n.counters.apps.counterTitle}"
               description="{$i18n.counters.apps.counterDescription}"/>
      <Counter value="{counterTrollValue || Math.round($counter3)}" title="{$i18n.counters.so.counterTrollTitle}"
               description="{$i18n.counters.so.counterTrollDescription}"/>
  </div>
</section>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

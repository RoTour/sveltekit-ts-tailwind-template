<script lang="ts">
	export let width = "25vw";
	export let height = "25vw";
	export let translateX = "0%";
	export let translateY = "0%";
	export let rotate = "0deg";
	export let posTop = "unset";
	export let posLeft = "unset";
	export let posRight = "unset";
	export let posBottom = "unset";
</script>

<div class="hidden md:block absolute bg-gradient-to-r from-secondary to-primary rounded-xl -z-10"
style="width: {width}; height: {height}; transform: translate({translateX}, {translateY}) rotate({rotate});
       top: {posTop}; left: {posLeft}; right: {posRight}; bottom: {posBottom}"></div>
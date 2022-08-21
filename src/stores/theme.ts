import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type Theme = {
	primary: string;
	secondary: string;
}


const green = {
	primary: '#4ade80',
	secondary: 'white',
}

const blue = {
	primary: '#60a5fa',
	secondary: 'white',
}

const red = {
	primary: '#fa5a5a',
	secondary: 'white',
}

const amber = {
	primary: '#faa852',
	secondary: 'white',
}

export const Themes = {
	green,
	blue,
	red,
	amber,
}

export const theme: Writable<Theme> = writable(Themes.blue)

export const setTheme = (theme: Theme) => {
	console.log('setTheme', theme);
	document.documentElement.style.setProperty('--color-primary', theme.primary)
	document.documentElement.style.setProperty('--color-secondary', theme.secondary)
}
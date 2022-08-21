import { writable } from 'svelte/store';

const french = {
	name: 'Robin TOURNÉ',
	subtitle: 'Développeur web et Mentor',
	counters: {
		so: {
			counterTrollValue: 'Beaucoup trop',
			counterTrollTitle: 'Visites sur StackOverflow',
			counterTrollDescription: 'Uncaught TypeError: arr.map is not a function',
		},
		github: {
			counterTitle: "Projets sur GitHub",
			counterDescription: "Découvertes de technologies, projets personnels, outils d’automatisation...",
		},
		apps: {
			counterTitle: "Apps FullStack",
			counterDescription: "Plateformes de gestion de projet, de visualisation de données, d'apprentissage...",
		}
	},
};

const english = {
	name: 'Robin TOURNÉ',
	subtitle: 'Web developer and Mentor',
	counters: {
		so: {
			counterTrollValue: 'A lot',
			counterTrollTitle: 'StackOverflow visits',
			counterTrollDescription: 'Uncaught TypeError: arr.map is not a function',
		},
		github: {
			counterTitle: "GitHub repos",
			counterDescription: "Discoveries of technologies, personal projects, automation tools...",
		},
		apps: {
			counterTitle: "FullStack Apps",
			counterDescription: "Project management platforms, data visualization, learning tool...",
		}
	}
};

export const i18n = writable(french);
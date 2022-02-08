const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// darkMode: 'class',
	theme: {
		extend: {
			gridTemplateAreas: {
				resume: [
					'header introduction',
					'contact experience',
					'skills experience',
					'education experience',
					'. experience'
				],
				'resume-slim': ['header', 'contact', 'introduction', 'skills', 'education', 'experience']
			},
			gridTemplateColumns: {
				resume: '3fr 7fr'
			},
			gridTemplateRows: {
				resume: 'min-content max-content auto'
			}
		}
	},

	plugins: [require('@savvywombat/tailwindcss-grid-areas')]
};

module.exports = config;

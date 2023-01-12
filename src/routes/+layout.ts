import type { LayoutLoad } from './$types';

import previewImg from "$lib/assets/amedoko-landscape-twitter.png";

export const load = (async () => {

	const url = "https://amedoko.watsonindustries.live";
	const description = "Find out where is Ame!";
	const title = 'Ame Doko?';

	return {
		twitter: {
			card: 'summary_large_image',
			site: '@amedoko',
			title: title,
			description: description,
			image: previewImg
		},
		description: description,
		image: previewImg,
		url: url,
		type: 'website',
		title: title,
		themeColor: '#F2D7B6'
	};
}) satisfies LayoutLoad;
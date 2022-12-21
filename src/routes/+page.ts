import type { PageLoad } from './$types';
import { HolodexApiClient } from 'holodex.js';
import { fetchLastLiveData, fetchNextLiveData, deltaFormatted } from '../utils';

export const load: PageLoad = (async ({ params: { } }) => {
	const channelId = "UCyl1z3jo3XHR1riLFKG5UAg";

	const client = new HolodexApiClient({
		apiKey: "37416592-50cc-437c-83a5-2ab3d08d96d0",
	});

	let data = async () => {
		let current = new Date();
		let lastLive = await fetchLastLiveData(client, channelId);
		let nextLive = await fetchNextLiveData(client, channelId);
		return {
			lastStreamDays: deltaFormatted(current, lastLive.actualStart || lastLive.scheduledStart || lastLive.publishedAt),
			nextStreamDays: deltaFormatted(nextLive.scheduledStart, current)
		};
	};

	return await data();
}) satisfies PageLoad;
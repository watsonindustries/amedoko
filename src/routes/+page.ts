import type { PageLoad } from './$types';
import { HolodexApiClient, VideoStatus } from 'holodex.js';
import { fetchLastLiveData, fetchLiveUpcomingData } from '../utils';

export const load: PageLoad = (async ({ params: { } }) => {
	const channelId = "UCyl1z3jo3XHR1riLFKG5UAg";

	const client = new HolodexApiClient({
		apiKey: "37416592-50cc-437c-83a5-2ab3d08d96d0",
	});

	let data = async () => {
		let currentLiveAndUpcoming = await fetchLiveUpcomingData(client, channelId);
		let pastVideo = await fetchLastLiveData(client, channelId);

		let liveVideo = currentLiveAndUpcoming.find(video => video.status === VideoStatus.Live);
		let nextVideo = currentLiveAndUpcoming
			.sort((a, b) => a.scheduledStart.getTime() - b.scheduledStart.getTime())
			.find(video => video.status === VideoStatus.Upcoming);

		return { pastVideo, liveVideo, nextVideo };
	};

	return await data();
}) satisfies PageLoad;
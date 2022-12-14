import type { PageLoad } from './$types';
import { HolodexApiClient, VideoStatus } from 'holodex.js';
import { fetchLastLiveData, fetchLiveUpcomingData } from '../utils';
import { ameChannelID } from '../const';

export const load: PageLoad = (async ({ params: { } }) => {
	const channelId = ameChannelID; // the channel ID used for fetching all of the app's info

	const client = new HolodexApiClient({ apiKey: '' });

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
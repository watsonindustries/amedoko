import type { PageLoad } from './$types';
import { HolodexApiClient, VideoStatus } from 'holodex.js';
import { fetchLastLiveData, fetchLiveUpcomingData } from '../utils';
import { AME_CHANNEL_ID, FREECHAT_REGEX } from '../const';

export const load: PageLoad = (async ({ params: { } }) => {
	const channelId = AME_CHANNEL_ID; // the channel ID used for fetching all of the app's info

	const client = new HolodexApiClient({ apiKey: '4c00fb7c-68f8-4fd7-8bd5-475783f233f6' });

	let data = async () => {
		let currentLiveAndUpcoming = await fetchLiveUpcomingData(client, channelId);
		let pastVideo = await fetchLastLiveData(client, channelId);

		let liveVideo = currentLiveAndUpcoming.find(video => video.status === VideoStatus.Live);
		let nextVideo = currentLiveAndUpcoming
			.sort((a, b) => a.scheduledStart.getTime() - b.scheduledStart.getTime())
			.filter(video => !FREECHAT_REGEX.test(video.title))
			.find(video => video.status === VideoStatus.Upcoming);

		let title = "Amedoko - Home";

		return { pastVideo, liveVideo, nextVideo, title };
	};

	return await data();
}) satisfies PageLoad;
import { HolodexApiClient, VideoStatus, VideoType } from 'holodex.js'

/** Subtracts `dateA` from `dateB` */
export function diffInDaysFloored(dateA: Date, dateB: Date): number {
	let diff = dateA.getTime() - dateB.getTime();
	return Math.floor(diff / 86400000);
}

export async function fetchLastLiveData(client: HolodexApiClient, channelId: string) {
	let videos = await client.getVideos({
		channel_id: channelId,
		include: "live_info",
		limit: 1,
		type: VideoType.Stream,
		status: VideoStatus.Past,
	});

	return videos[0];
}

export async function fetchNextLiveData(client: HolodexApiClient, channelId: string) {
	let videos = await client.getVideos({
		channel_id: channelId,
		include: "live_info",
		limit: 1,
		type: VideoType.Stream,
		status: VideoStatus.Upcoming,
	});

	return videos[0];
}
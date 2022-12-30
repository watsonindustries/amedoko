import { HolodexApiClient, Video, VideoStatus, VideoType } from 'holodex.js'

/** Subtracts `dateA` from `dateB` */
export function diffInDaysFloored(dateA: Date, dateB: Date): number {
	let diff = dateA.getTime() - dateB.getTime();
	return Math.floor(diff / 86400000);
}

/** Returns a formatted delta of 2 dates */
export function deltaFormatted(dateA: Date, dateB: Date): string {
	let delta = Math.abs(dateA.getTime() - dateB.getTime())
	const days = (delta / 86400000) | 0
	const hours = ((delta % 86400000) / 3600000) | 0
	const minutes = ((delta % 3600000) / 60000) | 0
	// const seconds = Math.round((delta % 60000) / 1000)

	return `${days} days ${hours} hours ${minutes} minutes`
}

export async function fetchLastLiveData(client: HolodexApiClient, channelId: string): Promise<Video> {
	let videos = await client.getVideos({
		channel_id: channelId,
		include: "live_info",
		limit: 1,
		type: VideoType.Stream,
		status: VideoStatus.Past,
	});

	return videos[0];
}

export async function fetchNextLiveData(client: HolodexApiClient, channelId: string): Promise<Video> {
	let videos = await client.getVideos({
		channel_id: channelId,
		include: "live_info",
		limit: 1,
		type: VideoType.Stream,
		status: VideoStatus.Upcoming,
	});

	return videos[0];
}

/** Returns a promise of an array of both live and upcoming streams for a given channel */
export async function fetchLiveUpcomingData(client: HolodexApiClient, channelId: string): Promise<Video[]> {
	let videos = await client.getLiveVideosByChannelId(channelId);

	return videos;
}
export function diffInDaysFloored(dateA: Date, dateB: Date): number {
	let diff = dateA.getTime() - dateB.getTime();
	return Math.floor(diff / 86400000);
}

export function convert24HourTimeToNumber(timeString: string): number {
  // Regular expression to match time in 'hh:mm' format
  const timeRegex = /^(\d{1,2}):(\d{2})$/;

  const match = timeString.match(timeRegex);

  if (!match) {
    // Invalid format
    return 0;
  }

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    // Invalid time values
    return 0;
  }

  return hours * 60 + minutes;
}

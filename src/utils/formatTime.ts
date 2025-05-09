const formatTime = (timestamp: string): string => {
  try {
    const now = new Date();
    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date: ${timestamp}`);
    }

    const diff = Math.abs(now.getTime() - date.getTime());

    const minutesDiff = Math.floor(diff / (1000 * 60));
    const hoursDiff = Math.floor(diff / (1000 * 60 * 60));
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutesDiff < 60) {
      return minutesDiff === 1 ? "1 minute ago" : `${minutesDiff} minutes ago`;
    } else if (hoursDiff < 24) {
      return hoursDiff === 1 ? "1 hour ago" : `${hoursDiff} hours ago`;
    } else {
      return daysDiff === 1 ? "1 day ago" : `${daysDiff} days ago`;
    }
  } catch (error) {
    console.error("Error formatting timestamp:", error);
    return "Invalid date";
  }
};

export default formatTime;

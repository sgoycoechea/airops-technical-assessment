export const getRelativeTime = (timestamp: number): string => {
  const now = new Date();
  const date = new Date(timestamp * 1000);

  const differenceInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  console.log(date);

  if (differenceInDays === 0) {
    return "Today";
  } else if (differenceInDays === 1) {
    return "Yesterday";
  } else if (differenceInDays < 4) {
    return `${differenceInDays} days ago`;
  } else if (differenceInDays < 7) {
    return `This Week`; // We would need to check if "this week" means in the last 7 days, or since last sunday
  } else if (differenceInDays < 14) {
    return `Two Weeks Ago`;
  }
  // This can of course be improved
  else {
    return "A Long Time Ago";
  }
};

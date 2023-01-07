const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

export const getRelativeTime = (timestamp: any) => {
  const now = Date.now();
  const diff = now - timestamp;
  console.log(diff);
  const seconds = Math.round(diff / 1000);
  const minutes = Math.round(diff / 1000 / 60);
  const hours = Math.round(diff / 1000 / 60 / 60);
  const days = Math.round(diff / 1000 / 60 / 60 / 24);
  const weeks = Math.round(diff / 1000 / 60 / 60 / 24 / 7);
  const months = Math.round(diff / 1000 / 60 / 60 / 24 / 30);
  const years = Math.round(diff / 1000 / 60 / 60 / 24 / 365);

  if (seconds < 60) {
    return rtf.format(-seconds, "second");
  } else if (minutes < 60) {
    return rtf.format(-minutes, "minute");
  } else if (hours < 24) {
    return rtf.format(-hours, "hour");
  } else if (days < 7) {
    return rtf.format(-days, "day");
  } else if (weeks < 4) {
    return rtf.format(-weeks, "week");
  } else if (months < 12) {
    return rtf.format(-months, "month");
  } else {
    return rtf.format(-years, "year");
  }
};

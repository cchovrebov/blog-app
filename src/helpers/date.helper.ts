const moment = require('moment');

export const getPeriod = (date: string) => {
  const currentDate = moment();
  const diffDays = currentDate.diff(date, 'days');
  const diffHours = currentDate.diff(date, 'hours');
  const diffMinutes = currentDate.diff(date, 'minutes');
  const diffSeconds = currentDate.diff(date, 'seconds');

  if (diffMinutes < 1) return `${diffSeconds === 1 ? `${diffSeconds} minute` : `${diffSeconds} minutes`}`;
  if (diffHours < 1) return `${diffMinutes === 1 ? `${diffMinutes} minute` : `${diffMinutes} minutes`}`;
  if (diffDays < 1) return `${diffHours === 1 ? `${diffHours} hour` : `${diffHours} hours`}`;
  return `${diffDays === 1 ? `${diffDays} day` : `${diffDays} days`}`;
}
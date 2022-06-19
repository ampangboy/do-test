function formatDatetime(now) {
  const d = new Date(now);

  const clock = d.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });

  const date = d.toLocaleDateString('ms-MY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return `${clock} | ${date}`;
}

export default formatDatetime;

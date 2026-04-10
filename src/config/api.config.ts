export const getSocketUrl = (): string => {
  const baseUrl = import.meta.env.VITE_API_URL;

  if (baseUrl) {
    return `${baseUrl.replace(/^http/, 'ws')}/ws`;
  }

  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${window.location.host}/ws`;
};

const clientId = 'YOUR_CLIENT_ID'; // replace this with your Strava Client ID
const redirectUri = 'https://rubyyylu.github.io/Strava-Tester/';

function connectStrava() {
  const scope = 'read,activity:read_all';
  window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=${scope}`;
}

import cookies from 'browser-cookies';

function getUsername() {
  return cookies.get('username');
}

export default getUsername;

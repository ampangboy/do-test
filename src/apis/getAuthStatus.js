import cookies from 'browser-cookies';

function getAuthStatus() {
  return cookies.get('isAuthenticated');
}

export default getAuthStatus;

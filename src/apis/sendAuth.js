import cookies from 'browser-cookies';

// eslint-disable-next-line no-unused-vars
function sendAuth(username, _password) {
  if (username || username !== '') {
    cookies.set('isAuthenticated', 'true');
    cookies.set('username', username);

    return true;
  }

  return false;
}

export default sendAuth;

let initialized = false;
const error = new Error('Authentication SDK not initialized');

export const initFB = () => {
  return new Promise((resolve, reject) => {
    if (initialized)
      resolve('Initialized.');

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
      FB.init({
        appId: '122106318495951',
        cookie: true,
        xfbml: true,
        version: 'v2.10'
      });
      if (typeof (FB) === 'undefined') {
        reject(error);
      }

      initialized = true;
      resolve('Initialized.');
    };
  })
};

export const getLoginStateFB = () => {
  return new Promise((resolve, reject) => {
    if (!initialized)
      reject(error);
    FB.getLoginStatus(res => {
      resolve(res);
    })
  })
};

export const getUserInfoFB = () => {
  return new Promise((resolve, reject) => {
    if (!initialized)
      reject(error);
    FB.api('/me', res => {
      resolve(res.name);
    });
  })
};

export const loginFB = async () => {
  return new Promise((resolve, reject) => {
    if (!initialized)
      reject(error);
    FB.login(res => {
      resolve(res.status)
    });
  })
};

export const logoutFB = () => {
  return new Promise((resolve, reject) => {
    if (!initialized)
      reject(error);
    FB.logout(res => {
      resolve(res.status);
    })
  })
};

export const fetchDataFB = (query) => {
  return new Promise((resolve, reject) => {
    if (!initialized)
      reject(error);
    FB.api(
      query.url,
      query.method,
      query.params,
      res => {
        resolve(res);
      });
  })
};
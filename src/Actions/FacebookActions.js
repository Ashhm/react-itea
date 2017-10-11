const facebookAsync = {
  init() {
    return new Promise((resolve, reject) => {
      if (typeof (FB) !== 'undefined' && window.fbAsyncInit.hasRun)
        resolve('Connection established.');

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
          reject(new Error('Connection failed.'));
        }
        resolve('Connection established.');
      };
    })
  },

  getLoginState() {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(res => {
        resolve(res.status);
      })
    })
  },

  getUserInfo() {
    return new Promise((resolve, reject) => {
      FB.api('/me', res => {
        resolve(res.name);
      });
    })
  },

  login() {
    return new Promise((resolve, reject) => {
      FB.login(res => {
        resolve(res.status)
      });
    })
  },

  logout() {
    return new Promise((resolve, reject) => {
      FB.logout(res => {
        resolve(res.status);
      })
    })
  }
};


const FacebookActions = {
  async getLoginState() {
    let status = null;
    let user = null;

    try {
      await facebookAsync.init();
      status = await facebookAsync.getLoginState();
      user = await facebookAsync.getUserInfo();
    } catch (err) {
      return err;
    }

    console.log('why this happend');
    return {status, user};
  },

  async login() {
    let status = null;
    let user = null;
    try {
      status = await facebookAsync.login();
      user =  await facebookAsync.getUserInfo();
    } catch (err) {
      return err;
    }

    return {status, user};
  },

  async logout() {
    let status = null;
    let user = null;
    try {
      status = await facebookAsync.logout();
      user =  '';
    } catch (err) {
      return err;
    }

    return {status, user};
  },

  getPosts() {

  }
};

export default FacebookActions;
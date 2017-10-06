const FacebookActions = {
  init(callback) {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '122106318495951',
        cookie: true,
        xfbml: true,
        version: 'v2.10'
      });
      this.getLoginState(callback);
      // Load the SDK asynchronously
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

  getLoginState(callback) {
    FB.getLoginStatus((response) => {
      callback(response);
      this.getCurrentUserInfo(callback);
    });
  },

  getCurrentUserInfo(callback) {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', (response) => {
      callback(response);
    });
  },

  login(callback) {
    FB.login((response) => {
      callback(response);
      this.getCurrentUserInfo(callback);
    });

  },

  logout(callback) {
    FB.logout((response) => {
      callback(response);
    })
  },

  getPosts() {
    this.init(FB.api('/mozilla/feed?fields=id,message,name,picture', response => {
      console.log(response);
    }));

  }
};

export default FacebookActions;
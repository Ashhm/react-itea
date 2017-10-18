import * as facebookAPI from '../utils/api';

const FacebookActions = {
  //on app start we should get auth state
  async getAuthInfo() {
    try {
      await facebookAPI.initFB();
      var {status} = await facebookAPI.getLoginStateFB();
      var username = (status === 'connected') ?
        await facebookAPI.getUserInfoFB() : '';
    } catch (err) {
      throw err;
    }

    return {status, username};
  },

  async login() {
    try {
      var status = await facebookAPI.loginFB();
      var username = (status === 'connected') ?
        await facebookAPI.getUserInfoFB() : '';
    } catch (err) {
      throw err;
    }

    return {status, username};
  },

  async logout() {
    try {
      var status = await facebookAPI.logoutFB();
      var username = '';
    } catch (err) {
      throw err;
    }

    return {status, username};
  },

  async fetchData(page) {
    const url = `https://graph.facebook.com/v2.10`;
    const query = `/${page}/posts?fields=full_picture,name,link,permalink_url,message,created_time`;

    try{
      var data = await facebookAPI.fetchDataFB(url + query);
    } catch(err) {
      return err;
    }

    return data;
  }
};

export default FacebookActions;
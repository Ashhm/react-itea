import * as facebookAPI from '../utils/api';

const searchUserById = async (id) => {
  const query = {
    url: `/${id}`,
    method: 'GET',
    params: {}
  };
  try {
    var user = await facebookAPI.fetchDataFB(query);
  } catch (err) {
    return err;
  }

  return user;
};

const getUserLikes = async (id) => {
  const query = {
    url: `/${id}/friendlists`,
    method: 'GET',
    params: {}
  };
  try {
    var {data} = await facebookAPI.fetchDataFB(query);
  } catch (err) {
    return err;
  }

  return data.length;
};

const searchPageInfo = async (page) => {
  const pageData = {};

  const query = {
    url: `/search`,
    method: 'GET',
    params: {
      q: `@${page}`,
      type: 'page',
      fields: 'name,link,picture,engagement'

    }
  };

  try {
    var {data} = await facebookAPI.fetchDataFB(query);
  } catch (err) {
    return err;
  }

  const entry = data[0];

  pageData.id = entry.id;
  pageData.name = entry.name;
  pageData.link = entry.link;
  pageData.avatar = entry.picture.data.url;
  pageData.likes = entry.engagement.count;
  pageData.social = entry.engagement.social_sentence;


  return pageData;
};

const getUserFriends = async (id) => {
  const query = {
    url: `/${id}/likes`,
    method: 'GET',
    params: {}
  };
  try {
    var {data} = await facebookAPI.fetchDataFB(query);
  } catch (err) {
    return err;
  }

  return data.length;
};

const getPagePosts = async (page) => {
  const query = {
    url: `/${page}/posts`,
    method: 'GET',
    params: {
      fields: 'full_picture,name,link,permalink_url,message,created_time'
    }
  };

  try {
    var data = await facebookAPI.fetchDataFB(query);
  } catch (err) {
    return err;
  }

  return data;
};

const FacebookActions = {
  //on app start we should get auth state
  async getAuthInfo() {
    try {
      await facebookAPI.initFB();
      var {status} = await facebookAPI.getLoginStateFB();
      var username = (status === 'connected') ?
        await facebookAPI.getUserInfoFB() : '';
    } catch (err) {
      return err;
    }

    return {status, username};
  },

  async login() {
    try {
      var status = await facebookAPI.loginFB();
      var username = (status === 'connected') ?
        await facebookAPI.getUserInfoFB() : '';
    } catch (err) {
      return err;
    }

    return {status, username};
  },

  async logout() {
    try {
      var status = await facebookAPI.logoutFB();
      var username = '';
    } catch (err) {
      return err;
    }

    return {status, username};
  },

  async fetchData(page) {


    try {
      var data = await getPagePosts(page);
    } catch (err) {
      return err;
    }

    return data;
  },

  async searchPage(page) {

    try {
      var data = await searchPageInfo(page);
    } catch (err) {
      return err;
    }

    return data;
  }
};

export default FacebookActions;
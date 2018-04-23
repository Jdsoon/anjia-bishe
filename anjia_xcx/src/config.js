// ENV
const env = 'development' // 'development' or 'production'

// WXAPP VERSION
const version = 1.0

// development and production host
const hosts = {
  // development: 'http://localhost:3000',
  development: 'http://10.23.192.195:3000',
  // development: 'http://10.23.173.108:3000',
  // production: 'https://xcx.hagongyi.com/api/v1'
  production: 'https://yyf.xcxhdj.hagongyi.com/api/v2'
}

const api = {
  houses:{
    getAllhouses: {
      method: 'GET',
      url: '/houses'
    },

    addHouse: {
      method: 'POST',
      url: '/houses/addHouse'
    },
    getComments: {
      method: 'POST',
      url: '/houses/getArrInfo'
    },
    addComment: {
      method: 'POST',
      url: '/houses/addComment'
    }
  },
  getLoadingInfo:{
    method: 'GET',
    url: '/loading'
  },
  user: {
    login: {
      method: 'POST',
      url: '/users/login'
    },
    getUserInfo: {
      method: 'POST',
      url: '/users/getUserInfo'
    },
    wxlogin: {
      method: 'POST',
      url: '/users/wxlogin'
    }
  },
  projects:{
    projects:{
      method: 'GET',
      url: '/projects'
    },
    projectDetail:{
      method: 'GET',
      url: '/project/'
    }
  },
  interact:{
    interacts:{
      method: 'GET',
      url: '/interacts'
    },
    interactDetail:{
      method: 'GET',
      url: '/interact/'
    }
  }
}

module.exports = {
  env,
  version,
  api: disposeUrl(api, hosts[env])
}

function disposeUrl (obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url
    } else {
      obj[v] = disposeUrl(obj[v], prefix)
    }
  })

  return obj
}


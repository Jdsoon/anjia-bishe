// ENV
const env = 'development' // 'development' or 'production'

// WXAPP VERSION
const version = 1.0

// development and production host
const hosts = {
  development: 'http://localhost:3000',
  // production: 'https://xcx.hagongyi.com/api/v1'
  production: 'https://yyf.xcxhdj.hagongyi.com/api/v2'
}

const api = {
  houses:{
    method: 'GET',
    url: '/houses'
  },
  getLoadingInfo:{
    method: 'GET',
    url: '/loading'
  },
  user: {
    login: {
      method: 'POST',
      url: '/user/login'
    },
    getUserInfo: {
      method: 'POST',
      url: '/user/getUserInfo'
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


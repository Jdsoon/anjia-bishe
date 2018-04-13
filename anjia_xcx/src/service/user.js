
import wepy from 'wepy';
import {api} from '../config';
import http from '../utils/request';

const user = {

  async login() {
    if(wepy.getStorageSync('userInfo')){
      console.log('您已登录')
      return { "errCode": "1","errMsg": "您已登录" }
    }else{

      const userinfoRaw=await wepy.getUserInfo();
      console.log('userinfoRaw',userinfoRaw)
      try {
        const loginInfo = await wepy.login();
        console.log(loginInfo)
        const loginData = await wepy.request({
          url: api.user.wxlogin.url,
          method: api.user.wxlogin.method,
          data: {
            'code':loginInfo.code,
            'iv': userinfoRaw.iv,
            'encryptedData': userinfoRaw.encryptedData,
            'userInfo': userinfoRaw.userInfo
          }
        })
        let userInfo = userinfoRaw.userInfo
        userInfo.openid = loginData.data.data.openid
        wepy.setStorageSync('userInfo',userInfo);

        console.log(userInfo)
        if(loginData.stateCode && loginData.stateCode == '1002') {
          console.log('登陆成功，用户权限已返回');
        }else if(loginData.stateCode && loginData.stateCode == '2002'){
          console.log('登陆失败')
        }
        // console.log(stateCode)

      } catch (e) {
        console.log('登陆失败',e)
      }
    }

  },

  async checkSession() {
    try {
      const checkSession = await wepy.checkSession();
      if (checkSession && checkSession.errMsg != 'checkSession:ok'){
        return false;
      }else if (checkSession && checkSession.errMsg == 'checkSession:ok'){
        return true;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }

}

export default user

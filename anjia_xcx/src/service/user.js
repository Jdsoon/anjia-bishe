
import wepy from 'wepy';
import {api} from '../config';
import http from '../utils/request';

const user = {

  async login() {
    const userinfoRaw=await wepy.getUserInfo();
    console.log('userinfoRaw',userinfoRaw)
    try {
      const loginInfo = await wepy.login();
      console.log(loginInfo)
      const loginData = await wepy.request({
        url: api.user.login.url,
        method: api.user.login.method,
        data: {
          'code':loginInfo.code,
          'iv': userinfoRaw.iv,
          'encryptedData': userinfoRaw.encryptedData
        }
      })

      if(loginData.stateCode && loginData.stateCode == '1002') {
        console.log('登陆成功，用户权限已返回');
      }else if(loginData.stateCode && loginData.stateCode == '2002'){
        console.log('登陆失败')
      }
      // console.log(stateCode)
      if(stateCode){

        wepy.setStorageSync('auth_key', userinfo.data.data.auth_key);
        wepy.setStorageSync('userInfo',userinfo.data.data.userInfo);
        wepy.setStorageSync('role',userinfo.data.data.role);
        console.log(stateCode)
        return loginData.stateCode;
      }
    } catch (e) {
        console.log('登陆失败',e)
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

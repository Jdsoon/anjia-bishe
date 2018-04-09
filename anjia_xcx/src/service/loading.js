
import wepy from 'wepy';
import {api} from '../config';

const loading = {
  async getLoadingInfo(){
  console.log('getLoading');
  const loadingInfo = {};
  try {
    // loadingInfo = await
    wepy.request({
      url: api.getLoadingInfo.url,
      method: api.getLoadingInfo.method
    })
  } catch (e) {
    console.log('getLoadingInfo  error!!', e)
  }
  return loadingInfo

  }
}

export default loading

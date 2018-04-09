import wepy from 'wepy';

export default async function request(options) {
  const authKey = await wepy.getStorageSync('auth_key');
  // console.log(authKey)
  if (!authKey) {
    console.log('没有authkey')
  }
  if (options.header) {
    options.header['x-weapp-auth-key'] = authKey
  } else {

    options.header = {
      'x-weapp-auth-key': authKey
    }
  }

  const response = await wepy.request(options);
  console.log(response)
  // console.log(response.data.status.stateCode)
  return response;

}

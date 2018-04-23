import wepy from 'wepy';

export default async function request(options) {

  const response = await wepy.request(options);
  // console.log(response.data.status.stateCode)
  return response.data;

}


import wepy from 'wepy';
import {api} from '../config';
import http from '../utils/request';

const houses = {
  async getHouses() {
    console.log('getAllHouses')
    try {
      const housesList = await http({
        url: api.houses.url,
        method: api.houses.method
      })

      console.log(housesList)
      return housesList

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllprojects')
    }


  },

  async getProjectDetail(projectId) {

    try {
      const res = await http({
        url: api.projects.projectDetail.url + projectId,
        method: api.projects.projectDetail.method
      })
    } catch (e) {
        console.log(e)
    }
  }

}

export default houses

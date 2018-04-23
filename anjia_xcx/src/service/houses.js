
import wepy from 'wepy';
import {api} from '../config';
import http from '../utils/request';

const houses = {
  async getHouses() {
    console.log('getAllHouses')
    try {
      const housesList = await http({
        url: api.houses.getAllhouses.url,
        method: api.houses.getAllhouses.method
      })

      console.log(housesList)
      return housesList

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllprojects')
    }


  },
  async addHouse(houseInfo) {
    console.log('addHouse')
    try {
      const housesList = await http({
        url: api.houses.addHouse.url,
        method: api.houses.addHouse.method,
        data: houseInfo
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
  },

  async getCommentsById(id) {
    let house = {}
    house.houseId = id
    try {
      const res = await http({
        url: api.houses.getComments.url,
        method: api.houses.getComments.method,
        data: house
      })
      console.log(res)
      return res
    } catch (e) {
        console.log(e)
    }
  }

}

export default houses

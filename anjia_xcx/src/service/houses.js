
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
  async getAllTodoHouses() {
    console.log('getAllTodoHouses')
    try {
      const housesList = await http({
        url: api.houses.getAllTodoHouses.url,
        method: api.houses.getAllTodoHouses.method
      })

      console.log(housesList)
      return housesList

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllTodoHouses')
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
  async getHousesById(id) {
    console.log('getHousesById')
    try {
      const housesList = await http({
        url: api.houses.getHousesById.url,
        method: api.houses.getHousesById.method,
        data: {'houseId': id}
      })

      console.log(housesList)
      return housesList

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllprojects')
    }


  },
  async agreeHouses(id) {
    console.log('agreeHouses')
    try {
      const housesList = await http({
        url: api.houses.agreeHouses.url,
        method: api.houses.agreeHouses.method,
        data: {'houseId': id}
      })

      console.log(housesList)
      return housesList

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllprojects')
    }


  },
  async getTodoHousesById(id) {
    console.log('getHousesById')
    try {
      const housesList = await http({
        url: api.houses.getTodoHousesById.url,
        method: api.houses.getTodoHousesById.method,
        data: {'houseId': id}
      })

      console.log(housesList)
      return housesList

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllprojects')
    }


  },
  async delHouse(id) {
    console.log('getHousesById')
    try {
      const housesList = await http({
        url: api.houses.delHouse.url,
        method: api.houses.delHouse.method,
        data: {'houseId': id}
      })

      console.log(housesList)
      return housesList

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllprojects')
    }


  },
  async addComment(arrInfo) {
    console.log('addComment')
    try {
      const res = await http({
        url: api.houses.addComment.url,
        method: api.houses.addComment.method,
        data: arrInfo
      })

      console.log(res)
      return res

      // await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log(e)
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

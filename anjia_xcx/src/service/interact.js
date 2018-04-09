
import wepy from 'wepy';
import {api} from '../config';
import http from '../utils/request';

const interact = {
  async getAllInteracts() {
    console.log('getAllProjects')
    try {
      const res = await http({
        url: api.interact.interacts.url,
        method: api.interact.interacts.method
      })
    } catch (e) {
      console.log('getAllprojects')
    }
    return res
  },

  async getInteractDetail(interactId) {

    try {
      const res = await http({
        url: api.interact.interactDetail.url + interactId,
        method: api.interact.interactDetail.method
      })
    } catch (e) {
        console.log(e)
    }
  }


}

export default interact

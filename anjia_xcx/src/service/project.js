
import wepy from 'wepy';
import {api} from '../config';
import http from '../utils/request';

const project = {
  async getAllProjects() {
    console.log('getAllProjects')
    try {
      const projects = await http({
        url: api.projects.projects.url,
        method: api.projects.projects.method
      })

      await wepy.setStorageSync('projects', projects);

    } catch (e) {
      console.log('getAllprojects')
    }

    return projects;

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

export default project

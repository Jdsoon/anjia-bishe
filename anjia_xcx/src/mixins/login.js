import wepy from 'wepy'
import user from '../service/user'
export default class loginMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  async onLoad() {
    console.log('mixin onLoad')
    await user.login()
    const userInfo =   await wepy.getUserInfo()
    this.userInfo = userInfo.userInfo
    this.$apply()
  }
}

import AuthStore from '../../Authentication/stores/AuthStore'
import AuthServiceApi from '../../Authentication/services/AuthService/index.api'
import {
   networkCallWithApiSauceWithoutAuth,
   networkCallWithApisauce
} from '../utils/APIUtils'
import JobsServiceApi from '../../JobbyApp/services/JobsService/index.api'
import JobsStore from '../../JobbyApp/stores/JobsStore/JobsStore'
import UserServiceApi from '../../JobbyApp/services/UserService/index.api'
import UserStore from '../../JobbyApp/stores/UserStore/UserStore'

const authService = new AuthServiceApi(networkCallWithApiSauceWithoutAuth())
const authStore = new AuthStore(authService)

const jobsService = new JobsServiceApi(networkCallWithApisauce(authStore))
const jobsStore = new JobsStore(jobsService)

const userService = new UserServiceApi(networkCallWithApisauce(authStore))
const userStore = new UserStore(userService)

export default {
   authStore,
   jobsStore,
   userStore
}

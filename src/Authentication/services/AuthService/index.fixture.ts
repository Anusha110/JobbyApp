import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import {
   LoginFailureResponseType,
   LoginRequestType,
   LoginSuccessResponseType
} from '../../stores/types'
import authenticateUser from '../../fixtures/authenticateUser.json'
import AuthService from '.'

class AuthServiceFixture implements AuthService {
   authenticateUser(
      requestObject: LoginRequestType
   ): Promise<LoginSuccessResponseType> {
      // return authenticateUser
      return resolveWithTimeout(authenticateUser)
   }
}

export default AuthServiceFixture

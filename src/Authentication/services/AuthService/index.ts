import {
   LoginRequestType,
   LoginFailureResponseType,
   LoginSuccessResponseType
} from '../../stores/types'

interface AuthService {
   authenticateUser(
      requestObject: LoginRequestType
   ): Promise<LoginSuccessResponseType>
}

export default AuthService

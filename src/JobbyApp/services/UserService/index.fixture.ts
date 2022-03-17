import { GetProfileDetailsResponseType } from '../../stores/types'
import getProfileDetails from '../../fixtures/getProfileDetails.json'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import UserService from '.'

class UserServiceFixture implements UserService {
   getProfileDetails(): Promise<GetProfileDetailsResponseType> {
      return resolveWithTimeout(getProfileDetails)
   }
}

export default UserServiceFixture

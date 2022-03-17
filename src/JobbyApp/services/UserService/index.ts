import { GetProfileDetailsResponseType } from '../../stores/types'

interface UserService {
   getProfileDetails(): Promise<GetProfileDetailsResponseType>
}

export default UserService

import { UserProfileType } from '../../types'

class UserProfileModel {
   name: string
   profileImageUrl: string
   shortBio: string

   constructor(userInfo: UserProfileType) {
      const { name, profile_image_url, short_bio } = userInfo

      this.name = name
      this.profileImageUrl = profile_image_url
      this.shortBio = short_bio
   }
}

export default UserProfileModel

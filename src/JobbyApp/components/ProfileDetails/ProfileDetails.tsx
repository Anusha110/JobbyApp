import { inject, observer } from 'mobx-react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn, MdWork } from 'react-icons/md'

import { API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { render } from '@testing-library/react'
import JobsStore from '../../stores/JobsStore/JobsStore'
import ProfileStore from '../../stores/UserStore/UserStore'
import { FormattedUserProfileType } from '../../stores/types'
import UserStore from '../../stores/UserStore/UserStore'
import Loader from '../../../Common/components/Loader/index'
import {
   ProfileBio,
   ProfileDetailsContainer,
   ProfileImage,
   ProfileName
} from './styledComponents'

interface ProfileDetailsType {
   dummyVar?: null //TODO:
}

interface InjectedProps extends ProfileDetailsType {
   userStore: UserStore
}

const ProfileDetails = inject('userStore')(
   observer(props => {
      const { userStore } = props as InjectedProps
      if (userStore.profileDetails) {
         const { name, profileImageUrl, shortBio } = userStore.profileDetails

         return (
            <ProfileDetailsContainer>
               <ProfileImage src={profileImageUrl} alt='profileImage' />
               <ProfileName>{name}</ProfileName>
               <ProfileBio>{shortBio}</ProfileBio>
            </ProfileDetailsContainer>
         )
      }
      return null
   })
)

export default ProfileDetails

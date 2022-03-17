import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { History } from 'history' //eslint-disable-line
import { API_FAILED } from '@ib/api-constants'
import AuthStore from '../../stores/AuthStore'
import { getAccessToken } from '../../../Common/utils/StorageUtils'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import {
   LoginFormContainer,
   LoginFormEl,
   InputLabel,
   WebsiteLogo,
   InputElement,
   LoginButton,
   ErrorMessage
} from './styledComponents'

interface LoginFormPropsType extends WithTranslation {
   history: History
}

interface InjectedProps extends LoginFormPropsType {
   authStore: AuthStore
}

@inject('authStore')
@observer
class LoginFormRoute extends Component<LoginFormPropsType> {
   @observable username = ''
   @observable password = ''

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   get authStore(): AuthStore {
      return this.getInjectedProps().authStore
   }

   redirectToHome = () => {
      const { history } = this.props
      const jwtToken = getAccessToken()
      if (jwtToken !== undefined) {
         history.replace('/')
      }
   }

   componentDidMount = () => {
      this.redirectToHome()
   }

   onSubmitSuccess = () => {
      this.redirectToHome()
   }

   @action
   changeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.username = event.target.value
   }

   @action
   changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.password = event.target.value
   }

   @action
   submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const userDetails = {
         username: this.username,
         password: this.password
      }
      await this.authStore.authenticateUser(userDetails, this.onSubmitSuccess)
   }

   render(): JSX.Element {
      return (
         <LoginFormContainer>
            <LoginFormEl onSubmit={this.submitForm}>
               <WebsiteLogo
                  src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
                  alt='website logo'
               />
               <InputLabel htmlFor='username'>USERNAME</InputLabel>
               <InputElement
                  type='text'
                  id='username'
                  placeholder='Username'
                  value={this.username}
                  onChange={this.changeUsername}
               />
               <InputLabel htmlFor='password'>PASSWORD</InputLabel>
               <InputElement
                  type='password'
                  placeholder='Password'
                  value={this.password}
                  onChange={this.changePassword}
               />
               <LoginButton type='submit'>Login</LoginButton>
               {this.authStore.authenticateUserApiStatus === API_FAILED && (
                  <ErrorMessage>
                     *{this.authStore.authenticateUserApiError}
                  </ErrorMessage>
               )}
            </LoginFormEl>
         </LoginFormContainer>
      )
   }
}

export default withTranslation()(LoginFormRoute)

export interface LoginRequestType {
   username: string
   password: string
}

export interface LoginSuccessResponseType {
   jwt_token: string
}

export interface LoginFailureResponseType {
   status_code: string
   error_msg: string
}

export function isLoginSuccess(
   object: any
): object is LoginSuccessResponseType {
   return 'jwt_token' in object
}

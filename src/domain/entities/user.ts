type UserData = { email: string, accessToken: string }

export class User {
  email: string
  accessToken: string

  constructor (deviceData: UserData) {
    this.email = deviceData.email
    this.accessToken = deviceData.accessToken
  }
}

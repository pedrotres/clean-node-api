import { SignUpController } from './signup'

describe('Signup Controller', () => {
    test('Should return 400 if no name provided', () => {
      const sut = new SignUpController()
      const httpRequest = {
          body: {
              email: 'any_email@mail.com',
              password: 'any_password',
              passwordConfirmation: 'any_password'
          }
      }
      const htppResponse = sut.handle(httpRequest)
      expect(htppResponse.statusCode).toBe(400)
      expect(htppResponse.body).toEqual(new Error('Missing param: name'))
    })
})


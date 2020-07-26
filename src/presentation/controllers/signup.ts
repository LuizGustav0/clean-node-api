import { HttpResponse, HttpResquest } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
export class SignUpController {
  handle (httpRequest: HttpResquest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}

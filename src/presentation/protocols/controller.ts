import { HttpResponse, HttpResquest } from './http'
export interface Controller {
  handle (httpRequest: HttpResquest): HttpResponse
}

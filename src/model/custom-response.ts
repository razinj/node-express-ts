type ResponseError = Error | unknown

export class CustomResponse<T> {
  data: T
  error: ResponseError
  message?: string

  constructor(data: T, error: ResponseError, message?: string) {
    this.data = data
    this.error = error
    this.message = message
  }
}

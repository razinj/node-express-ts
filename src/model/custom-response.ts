type CustomResponseError = Error | unknown

export class CustomResponse<T> {
  data: T
  error: CustomResponseError
  message?: string

  constructor(data: T, error: CustomResponseError, message?: string) {
    this.data = data
    this.error = error
    this.message = message
  }
}

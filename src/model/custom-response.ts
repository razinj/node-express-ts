export class CustomResponse<T> {
  data: T
  error: Error | string
  message: string

  constructor(data: T, error: Error | string, message: string) {
    this.data = data
    this.error = error
    this.message = message
  }
}

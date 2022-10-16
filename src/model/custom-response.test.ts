import { CustomResponse } from './custom-response'

const testCases = [
  // string data with message
  [
    new CustomResponse('string-data', undefined, 'a-message'),
    { data: 'string-data', error: undefined, message: 'a-message' },
  ],
  // object data with message
  [
    new CustomResponse({ foo: 'bar' }, undefined, 'a-message'),
    { data: { foo: 'bar' }, error: undefined, message: 'a-message' },
  ],
  // object data without message
  [new CustomResponse({ foo: 'bar' }, undefined), { data: { foo: 'bar' }, error: undefined, message: undefined }],
  // error without message (data is undefined)
  [
    new CustomResponse(undefined, new Error('an-error')),
    { data: undefined, error: new Error('an-error'), message: undefined },
  ],
  // error with message (data is null)
  [
    new CustomResponse(null, new Error('an-error'), 'an-error-message'),
    { data: null, error: new Error('an-error'), message: 'an-error-message' },
  ],
  // string error with message (data is null)
  [
    new CustomResponse(null, 'an-error', 'an-error-message'),
    { data: null, error: 'an-error', message: 'an-error-message' },
  ],
]

describe('CustomResponse', () => {
  it.each(testCases)(
    'should create correct response - %#',
    (customResponse: CustomResponse<unknown>, expectedResult: any) => {
      expect(customResponse).toEqual(expectedResult)
    }
  )
})

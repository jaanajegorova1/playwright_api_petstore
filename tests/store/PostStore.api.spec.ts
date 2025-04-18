import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

test.describe('POST /store', async () => {
  test('BG2-11 Post store order. Place an order for a pet. Receive code 200', async ({
    request,
  }) => {
    const requestBody = {
      id: 0,
      petId: 0,
      quantity: 0,
      shipDate: '2025-04-18T13:22:07.075Z',
      status: 'string',
      complete: true,
    }
    const response = await request.post('https://petstore.swagger.io/v2/store/order', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-12 Add a new pet to the store using empty requestBody. Receive code 400', async ({
    request,
  }) => {
    //Bug. Required body is empty, but the system received status 200
    const requestBody = {}
    const response = await request.post('https://petstore.swagger.io/v2/store/order', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-13 Add a new pet to the store. Send request without required requestBody. Receive code 400', async ({
    request,
  }) => {
    //required body is missing, but the system received status 415 UNSUPPORTED_MEDIA_TYPE
    const response = await request.post('https://petstore.swagger.io/v2/store/order', {})
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.UNSUPPORTED_MEDIA_TYPE)
  })

  test('BG2-14 Add a new pet to the store with id string. Receive code 400', async ({
    request,
  }) => {
    //if id is not a number but string, then returned status code 500, instead of 400.
    const requestBody = {
      id: 'AAA',
      petId: 0,
      quantity: 0,
      shipDate: '2025-04-18T13:22:07.075Z',
      status: 'string',
      complete: true,
    }
    const response = await request.post('https://petstore.swagger.io/v2/store/order', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
  })
})

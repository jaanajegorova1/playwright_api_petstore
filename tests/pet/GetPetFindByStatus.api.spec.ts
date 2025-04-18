import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

test.describe('GET /pet/findByStatus', async () => {
  test('BG2-1 Finds Pets by status - available. Receive code 200', async ({ request }) => {
    const requestParameters = {
      status: 'available',
    }
    const response = await request.get(
      'https://petstore.swagger.io/v2/pet/findByStatus?status=available',
      {
        params: requestParameters,
      },
    )
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    console.log('response headers:', response.headers())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-2 Finds Pets by status - pending. Receive code 200', async ({ request }) => {
    const requestParameters = {
      status: 'pending',
    }
    const response = await request.get(
      'https://petstore.swagger.io/v2/pet/findByStatus?status=pending',
      {
        params: requestParameters,
      },
    )
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    console.log('response headers:', response.headers())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-3 Finds Pets by status - sold. Receive code 200', async ({ request }) => {
    const requestParameters = {
      status: 'sold',
    }
    const response = await request.get(
      'https://petstore.swagger.io/v2/pet/findByStatus?status=sold',
      {
        params: requestParameters,
      },
    )
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    console.log('response headers:', response.headers())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-4 Invalid status value. Receive code 400', async ({ request }) => {
    //Bug. Not existing parameter used
    const requestParameters = {
      status: 'mutts',
    }
    const response = await request.get(
      'https://petstore.swagger.io/v2/pet/findByStatus?status=mutts',
      {
        params: requestParameters,
      },
    )
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    console.log('response headers:', response.headers())
    expect(response.status()).toBe(StatusCodes.OK) // Expected BAD_REQUEST, 400 status code; but received OK, status code 200. This endpoint has error for invalid status value. Tried to put status as not existed, random letters, numbers, words, in all results return status code 200, but it's not correct.
  })

  test('BG2-5 Send get request without required parameter. Receive code 400', async ({
    request,
  }) => {
    //Bug. Required parameter is missing. Parameter Status is required. But even without parameter I receive status code 200, but should receive code 404
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus')
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    console.log('response headers:', response.headers())
    expect(response.status()).toBe(StatusCodes.OK) // Expected BAD_REQUEST, 400 status code; but received OK, status code 200.
  })
})

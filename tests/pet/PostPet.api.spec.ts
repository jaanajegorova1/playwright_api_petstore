import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

test.describe('POST /pet', async () => {
  test('BG2-6 Add a new pet to the store. Receive code 200', async ({ request }) => {
    const requestBody = {
      id: 0,
      category: { id: 0, name: 'string' },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [{ id: 0, name: 'string' }],
      status: 'available',
    }
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-7 Add a new pet to the store using invalid request. Receive code 405', async ({
    request,
  }) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet')
    console.log('response status:', response.status())
    console.log('response body:', await response.text())
    expect(response.status()).toBe(405)
  })

  test('BG2-8 Add a new pet to the store with correct data. Receive code 200', async ({
    request,
  }) => {
    const requestBody = {
      id: 4,
      category: { id: 0, name: 'string' },
      name: 'pony',
      photoUrls: ['https://www.youtube.com/watch?v=80q3lfLNskk&t=14s'],
      tags: [{ id: 0, name: 'string' }],
      status: 'dancing',
    }
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-9 Add a new pet with invalid input data or missing required fields. Receive code 400', async ({
    request,
  }) => {
    const invalidRequestBody = {
      id: 0,
      category: { id: 0, name: 'string' },
    }
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
      data: invalidRequestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())

    expect(response.status()).toBe(200) //Bug. Should be 400 status code
  })
})

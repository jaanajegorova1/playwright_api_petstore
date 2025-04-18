import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

test.describe('PUT /pet', async () => {
  test('BG2-15 Update an existing pet using correct data. Receive code 200', async ({
    request,
  }) => {
    const requestBody = {
      id: 0,
      category: { id: 0, name: 'string' },
      name: 'doggie123',
      photoUrls: ['string'],
      tags: [{ id: 5, name: 'string' }],
      status: 'available',
    }
    const response = await request.put('https://petstore.swagger.io/v2/pet', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test('BG2-16 Update an existing pet with not correct method. Receive code 405', async ({
    request,
  }) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet')
    console.log('response status:', response.status())
    console.log('response body:', await response.text())
    expect(response.status()).toBe(405)
  })
})

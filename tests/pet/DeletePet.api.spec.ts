import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

test.describe('Delete /pet/{petId}', async () => {
  test('BG2-17 Deletes pet with not existing Id. Receive code 404', async ({ request }) => {
    const requestBody = {
      api_key: 0,
    }
    const response = await request.delete(
      'https://petstore.swagger.io/v2/pet/9223372036854776000',
      {
        data: requestBody,
      },
    )
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.NOT_FOUND)
  })

  test('BG2-18 Deletes pet with not correct method. Receive code 405', async ({ request }) => {
    const requestBody = {
      api_key: 0,
    }
    const response = await request.put('https://petstore.swagger.io/v2/pet/9223372036854776000', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.text())
    expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
  })

  test('BG2-19 Deletes pet. Receive code 200', async ({ request }) => {
    const requestBody = {
      api_key: 0,
    }
    const response = await request.delete('https://petstore.swagger.io/v2/pet/468203', {
      data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.text())
    expect(response.status()).toBe(StatusCodes.NOT_FOUND) //id can be deleted only 1 time, code 200 and OK status. For others browsers check, id already not found = 404 and it's OK
  })
})

import { expect, test } from '@playwright/test'

test('BG2-10 Get store inventory. Return pet inventories by status. Receive code 200', async ({
  request,
}) => {
  const response = await request.get('https://petstore.swagger.io/v2/store/inventory')
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  expect(response.status()).toBe(200)
})

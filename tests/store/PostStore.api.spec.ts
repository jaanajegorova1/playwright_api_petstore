import { expect, test } from "@playwright/test";

test('Post store order. Place an order for a pet. Receive code 200', async ({ request }) => {
    const requestBody = {
        id: 0,
        category: {id: 0, name: "string"},
        name: 'doggie',
        photoUrls: ['string'],
        tags: [{id: 0, name: 'string'}],
        status: 'available',
    }
    const response = await request.post("https://petstore.swagger.io/v2/pet", {
        data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(200)
})

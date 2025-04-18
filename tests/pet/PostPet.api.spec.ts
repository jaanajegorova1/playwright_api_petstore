import { expect, test } from "@playwright/test";
import {StatusCodes} from "http-status-codes";

test('Post pet. Add a new pet to the store. Receive code 200', async ({ request }) => {
    const requestBody = {
        id: 0,
        petId: 0,
        quantity: 0,
        shipDate: "2025-04-18T13:22:07.075Z",
        status: 'string',
        complete: true,
    }
    const response = await request.post("https://petstore.swagger.io/v2/store/order", {
        data: requestBody,
    })
    console.log('response status:', response.status())
    console.log('response body:', await response.json())
    expect(response.status()).toBe(StatusCodes.OK)
})

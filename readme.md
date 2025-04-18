#Swagger url = "https://petstore.swagger.io/"

#All api test cases can be found in directory "tests". Comments not deleted, to explain some moments

#HTTP status codes installed:
npm install http-status-codes

#Prettier installed:
npm install --save-dev prettier

#To check the code format:
npx prettier . --check
npx prettier . --write

#To run all test cases use
npx playwright test

## Report with results

## Get Pet

| #        | Test name                                      | Should receive code   | Received code   | Status   |
| -------- | ---------------------------------------------- | --------------------- | --------------- | -------- |
| BG2-1    | Finds Pets by status - available               | 200                   | 200             | Passed   |
| BG2-2    | Finds Pets by status - pending                 | 200                   | 200             | Passed   |
| BG2-3    | Finds Pets by status - sold                    | 200                   | 200             | Passed   |
| BG2-4    | Invalid status value                           | 400                   | 200             | Failed   |
| BG2-5    | Send get request without required parameter    | 400                   | 200             | Failed   |
| -------- | ---------------------------------------- ----- | --------------------- | --------------- | -------- |

## Post Pet

| #        | Test name                                                        | Should receive code   | Received code   | Status   |
| -------- | ---------------------------------------------------------------- | --------------------- | --------------- | -------- |
| BG2-6    | Add a new pet to the store                                       | 200                   | 200             | Passed   |
| BG2-7    | Add a new pet to the store using invalid request                 | 405                   | 405             | Passed   |
| BG2-8    | Add a new pet to the store with correct data                     | 200                   | 200             | Passed   |
| BG2-9    | Add a new pet with invalid input data or missing required fields | 400                   | 200             | Failed   |
| -------- | ----------------------------------------------                   | --------------------- | --------------- | -------- |

## Get Store

| #        | Test name                                                | Should receive code     | Received code   | Status     |
| -------- | -------------------------------------------------------- | ----------------------- | --------------- | ---------- |
| BG2-10   | Get store inventory. Return pet inventories by status    | 200                     | 200             | Passed     |
| -------- | -------------------------------------------------------- | ----------------------- | --------------- | ---------- |

## Post Store

| #        | Test name                                                               | Should receive code   | Received code   | Status   |
| -------- | ----------------------------------------------------------------------- | --------------------- | --------------- | -------- |
| BG2-11   | Post store order. Place an order for a pet                              | 200                   | 200             | Passed   |
| BG2-12   | Add a new pet to the store using empty requestBody                      | 400                   | 200             | Failed   |
| BG2-13   | Add a new pet to the store. Send request without required requestBody   | 400                   | 415             | Failed   |
| BG2-14   | Add a new pet to the store with id string                               | 400                   | 500             | Failed   |
| -------- | ----------------------------------------------------------------------- | --------------------- | --------------- | -------- |

## Put Pet

| #        | Test name                                                | Should receive code     | Received code   | Status   |
| -------- | -------------------------------------------------------- | ----------------------- | --------------- | -------- |
| BG2-15   | Update an existing pet using correct data                | 200                     | 200             | Passed   |
| BG2-16   | Update an existing pet with not correct method           | 405                     | 405             | Passed   |
| -------- | -------------------------------------------------------- | ----------------------- | --------------- | -------- |

## Delete Pet

| #        | Test name                                                | Should receive code     | Received code   | Status     |
| -------- | -------------------------------------------------------- | ----------------------- | --------------- | ---------- |
| BG2-17   | Deletes pet with not existing Id                         | 404                     | 404             | Passed     |
| BG2-18   | Deletes pet with not correct method                      | 405                     | 405             | Passed     |
| BG2-19   | Deletes pet. Receive code 200 (1st check)                | 200                     | 200             | Passed     |
| -------- | -------------------------------------------------------- | ----------------------- | --------------- | ---------- |

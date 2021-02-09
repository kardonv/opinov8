# Test-task

## Description

Task has next requirements:
    
    Write a simple REST API in Node.js that calculates monthly rate based on given conditions:
        1. Down Payment
        2. Number of month
        3. Interest rate
        4. Final payment
        5. Final payment is optional value and is considered as additional final rate after the amount of selected month passed.

## How to run

### Pre requirements
If you want run app in docker container you must install docker locally

### Local running
    1. Clone repo to your local machine, navigate to folder with code and run `npm install`
    2. After successfully install packages execute `npm run start` - app by default will start on port '8080', you can change it in config.ts file in root directory

### Docker 
    1. To build docker image execute `npm run docker:build`
    2. After successfully building docker image execute `npm run docker:start`

### Tests

To run tests type `npm run test` in your console

## Swagger

## Running Application

* Download or Clone the repo https://github.com/ugbechike/hackerbay-backend

* Navigate to the working directory using the command:
 ```
 $ cd hackerbay
 
 ```

* Then Run 
```
$ npm install

```
to install all the dependencies for the application.

* Then create a .env file and add your jwt secret like this secret = "YOUR_SECRET_KEY"

* Then run 
```
$ npm start

```
while the server will start at localhost:3000

## UserLogin

Once you get the application running, you can test the user login with a postman make a post request using the localhost url http://localhost:3000/auth/login , with the following parameters: 
username: "NAME_OF_CHOICE"
password: "ANY_PASSWORD_WORKS"
if login is successful, you will recieve a jsonwebtoken.

## Protected Routes

To have access to protected routes, all you have to do is make a POST, GET, or PATCH request method with the token provided on login as header while making the request.

## Json PATCH

This is a protected request meaning that you will have to provide token to show that you are a logged in user in other to make a patch request to a file. The url for the patch request is: http://localhost:3000/auth/userpatch

The json patching request accepts two parameters which has key : mydoc , value:'must be a JSON object'  and key:patch ,value:'must be a JSON object'

## Thumbnail Generation

To generate a thumbnail, you need to make a POST request with a token provided via url localhost:3000/auth/thumbnail. Then when making the request, provide the image url with key as source and value as the "IMAGE_URL"
It will create a thumbnail with width of 50 and height of 50.

## Unit Testing

* To run the unit test of this application, run the following command:
```
$ npm run test

```

## Coverage

To check the degree to which the source code has been tested, run the following Code:
```
$ npm run coverage

```
Note that if sucessful, will create a folder .nyc_output.

## Dependencies

* jsonwebtoken: Used to generate and verify token
* nyc: describes the degree to which the source code has been tested.
* jsonpatch: JSON Patch is a format for describing changes to a JSON document.
* Chai:  is an assertion library, similar to Node's built-in assert.
* node-thumbnail: creates a queue of images and converts them asynchronously into thumbnails. 


# GRILLRILLA

GRILLRILLA is a real time Food Ordering website made with Node JS and Express Js.
Mongodb is used as the database.

To run this app in your PC you have to follow these Steps.

## Screenshots

#### Main Page

![App Screenshot 1](/public/img/screenshots/1.png?raw=true "Optional Title")

#### Menu (All the dishs are directly from Database)

![App Screenshot 2](/public/img/screenshots/2.png?raw=true "Optional Title")

#### Admin Page (Only for ADMINS)

![App Screenshot 3](/public/img/screenshots/3.png?raw=true "Optional Title")

## Tech Stack

**Client:** Socket.io, TailwindCSS, EJS
**Server:** Node, Express

## Pre-requists

#### You need to download these in your PC before you move on with other steps.

- Node Js [refer here](https://www.guru99.com/download-install-node-js.html)
- Mongodb [refer here](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)
- Stripe [refer here](https://stripe.com/en-in)

## Clone Locally

Clone the project

```bash
  git clone https://github.com/Karan-Dhingra/GRILLRILLA.git
```

Go to the project directory

```bash
  cd my-project
```

## Install all Dependencies to run

Install project with npm

1. For Initializing npm modules, just press enter for each questions asked and move on.

```bash
  npm init
```

2. Install Express

```bash
  npm install express
```

3. Install Engine

```bash
  npm install ejs express-ejs-layouts
```

4. Install Nodemon to run our project

```bash
  npm install nodemon -g
```

5. To import features of Tailwind CSS in our project

```bash
  npm install tailwindcss
```

6. To connect with mongo db

```bash
  npm install connect-mongo
```

7. To install mongoose

```bash
  npm install mongoose
```

8. To store session in our database

```bash
  npm install express-session
```

9. To use .env file

```bash
  npm install dotenv
```

10. Axios for creating http requests

```bash
  npm install axios
```

11. To get notification

```bash
  npm install noty
```

12. To flash results and error if there are

```bash
  npm install express-flash
```

13. Passport helps in checking and login

```bash
  npm install passport passport-local express-session
```

14. It is used to store password in hash for SECURITY

```bash
  npm install bcrypt
```

15. To store current time stamp

```bash
  npm install moment
```

16. For making realtime events //using this we dont require to reload our page again for latest updates.

```bash
  npm install socket.io
```

17. We have to add Stripe feature to use them //Build Payment Gateway

```bash
  npm install stripe[@stripe/stripe-js]
```

18.  Install Stripe //using this we dont require to reload our page again for latest updates.

```bash
  npm install stripe
```

19.  Plugin for Advance JS because of Larwel Mix

```bash
  @babel/plugin-proposal-class-properties
```

## Further Steps

Before running app you need to do some more steps.

Go to file `.env.example` file rename file to `.env`

```
COOKIES_SECRET =
MONGO_CONNECTION_URL =
STRIPE_PRIVATE_KEY = 
```

You will find something like this after renaming file to `.env` just write something here.
in `COOKIES_SECRET` you can write anything like `This is Cookie`

In `MONGO_CONNECTION_URL` fill the address of your database. For this if you are
locally on your PC just go to Mongo Compass and make a database let it be `GRILLRILLA`
make a collection menu and insert Menu content by uploading file.
You have a `Menu.json` file just upload there.
After making database add `mongodb://localhost/GRILLRILLA` make sure your database name is `GRILLRILLA`.

In `STRIPE_PRIVATE_KEY` you have to write Stripe key for this you have to sign in `Stripe.com` link is given above in Pre-requists. This Private key is available on Stripe.com
Steps to get your Private Key is ***`SignIn > Developers [You will se Dashboard, On Left Side in Navbar] > API Keys > Secret Key [Reveal Test Key] copy it and paste there.`***

## Finish

That's it you have to go to local check in terminal on which port your app is
running. Mostly it is `http://localhost:3000/`

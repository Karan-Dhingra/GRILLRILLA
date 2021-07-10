# GRILLRILLA

GRILLRILLA is a real time Food Ordering website made with Node JS and Express Js.
Mongodb is used as the database.

To run this app in your PC you have to follow these Steps.

## Screenshots

#### Main Page

![App Screenshot 1](/public/img/screenshots/1.png?raw=true "Optional Title")

#### Menu (All the dishs are directly from Database)

![App Screenshot 2](/public/img/screenshots/2.png?raw=true "Optional Title")

![App Screenshot 3](/public/img/screenshots/3.png?raw=true "Optional Title")
#### Footer

![App Screenshot 4](/public/img/screenshots/4.png?raw=true "Optional Title")

#### Admin Page (Only for ADMINS)

![App Screenshot 5](/public/img/screenshots/5.png?raw=true "Optional Title")

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
  git clone https://github.com/User-Name/GRILLRILLA.git
```

Go to the project directory

```bash
  cd GRILLRILLA
```

## Run these following comaands to run Project

1. To set suitable npm version

```bash
  npm install -g npm@7.18.1
```

2. To Install Node Modules

```bash
  npm install
```

## Dependencies used

1. Express

2. EJS Engine

3. Nodemon

4. Tailwind CSS

5. Mongo db

6. Mongoose

7. Axios

8. Noty

9. Passport

10. Bcrypt

11. Socket.io

12. Stripe

13. Larwel Mix


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

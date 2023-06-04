# Installation:-

```js
npm i connect2mongodb
```

# Warning:-

Make sure you must have installed exact same version i.e.:- **mongoose@7.2.2,** in NextJS/Express Server.

```js
npm i mongoose@7.2.2
```

Otherwise it will connect to the db, but starts giving error while trying to access the db.

# How to use:-

## Firstly update your **.env**:-

Your ***MONGO_URI*** will look like this:- **mongodb+srv://aassddff:aassddff@connect2mongodb.github.mongodb.net/**

```js
MONGO_URI=mongodb+srv://username:password@hostname/
```

This module will atuomatically fetch your ***MONGO_URI*** from the ***.env***, but make sure to use the same format, and don't add collection name after last '**/**'.

## Import the module:-

```js
const { connect2MongoDB, disconnect2MongoDB } = require('connect2mongodb');
```

## To Connect:-

```js
await connect2MongoDB('Your Database Name');
```

## To Disconnect:-

```js
await disconnect2MongoDB();
```

## To Connect with a return value:-

This will return ***true*** if **Connected** to the database else ***false***.

```js
const customVariable = await connect2MongoDB('Your Database Name');
console.log(customVariable);
```

## To Disconnect with a return value:-

This will return ***true*** after ***Disconnecting*** to the database.

```js
const customVariable = await disconnect2MongoDB()
console.log(customVariable);
```

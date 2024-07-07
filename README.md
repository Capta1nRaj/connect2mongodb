<p align="center">
  <a href="https://github.com/Capta1nRaj/connect2mongodb" target="_blank"><img width="400px" src="https://www.priyalraj.com/_next/image?url=%2Fassets%2Fimages%2FMyProjectsSectionImages%2Fconnect2mongodb.png&w=1080&q=75" /></a>
  <h3 align="center">Connect2MongoDB</h3>
  <p align="center" style="align: center;">
      <a href="https://github.com/Capta1nRaj/connect2mongodb/stargazers">
         <img src="https://img.shields.io/github/stars/Capta1nRaj/connect2mongodb" alt="Github Stars" />
      </a>
      <a href="https://github.com/Capta1nRaj/connect2mongodb/blob/main/LICENSE">
         <img src="https://img.shields.io/github/license/Capta1nRaj/connect2mongodb" alt="Licence" />
      </a>
      <a href="https://www.npmtrends.com/connect2mongodb">
         <img src="https://img.shields.io/npm/dm/connect2mongodb" alt="Downloads" />
      </a>
      <a href="https://bundlephobia.com/package/connect2mongodb@1.1.31">
         <img src="https://img.shields.io/bundlephobia/min/connect2mongodb@1.1.31" alt="Size" />
      </a>
   </p>
</p>

# Installation:-

```js
npm i connect2mongodb
```

# Warning:-

Make sure you must have installed exact same version i.e.:- **mongoose@8.4.5,** in NextJS/Express Server.

```js
npm i mongoose@8.4.5
```

Otherwise it will connect to the DB, but starts giving error while trying to access the DB.

# How to use:-

## Method 1:- With A Fixed Database:-

## Firstly update your **.env**:-

Your ***MONGODB_URI*** will look like this:- **mongodb+srv://username:password@hostname/your_database_name**

```js
MONGODB_URI=mongodb+srv://username:password@hostname/your_database_name
```

This module will atuomatically fetch your ***MONGODB_URI*** from the ***.env***, but make sure to use the same/default format provided by MongoDB, and make sure to add the database name too.

## Import the module:-

```js
import { connect2MongoDB, disconnect2MongoDB } from 'connect2mongodb'
```

## To Connect:-

```js
await connect2MongoDB();
```

## To Disconnect:-

```js
await disconnect2MongoDB();
```

## To Connect with a return value:-

This will return ***true*** if **Connected** to the database else ***false***.

```js
const customVariable = await connect2MongoDB();
console.log(customVariable);
```

## To Disconnect with a return value:-

This will return ***true*** after ***Disconnecting*** to the database.

```js
const customVariable = await disconnect2MongoDB()
console.log(customVariable);
```

## Method 2:- With a dynamic database:-

## Firstly update your **.env**:-

Your ***MONGO_URI*** will look like this:- **mongodb+srv://username:password@host_name/**

```js
MONGO_URI=mongodb+srv://username:password@hostname/
```

This module will atuomatically fetch your ***MONGO_URI*** from the ***.env***, but make sure to use the same format, and don't add the database name after last '**/**'.

## Import the module:-

```js
import { connect2MongoDB, disconnect2MongoDB } from 'connect2mongodb'
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

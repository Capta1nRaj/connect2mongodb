# Installation:-

```js
npm i connect2mongodb
```

# Usage:-

## Firstly update your ***.env***:-

Your ***MONGO_URI*** will look like this:- **mongodb+srv://aassddff:aassddff@connect2mongodb.github.mongodb.net/**

```js
MONGO_URI=mongodb+srv://username:password@hostname/
```

This module will atuomatically fetch your ***MONGO_URI*** from the ***.env***, but make sure to use the same format, and don't add collection name after last '**/**'.

## To Connect:-

```js
await connect2MongoDB(`Your Database Name`);
```

## To Disconnect:-

```js
await disconnect2MongoDB();
```

## To Connect with a return value:-

This will return ***true*** if **Connected** to the database else ***false***.

```js
const connecting = await connect2MongoDB(`Your Database Name`);
console.log(connecting);
```

## To Disconnect with a return value:-

This will return ***true*** after ***Disconnecting*** to the database.

```js
const disconnecting = await disconnect2MongoDB()
console.log(disconnecting);
```

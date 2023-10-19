const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const  os = require('os')

const { Client } = require ('pg');
const PORT = 4000;
const app = express();

//connect to redis
const REDIS_PORT = 6397;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient({
url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to resis ...'));
redisClient.connect();

//connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example-';
const DB_PORT = '5423';
const DB_HOST = 'postgres'           ## we can add service name like `mongo` because network when restart docker it was changed so service name mapping new ips
const URI = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
const client = new Client ({
  connectionString: URI,
});

client
 .connect()
 .then(() => console.log('connect to podtgres db...')
 .catch((err) => console.log('failed to connect to postgres db:', err))

#const DB_USER = 'root';
#const DB_PASSWORD = 'example'; 
#const DB_PORT = '27017';
#const DB_HOST = 'mongo'           ## we can add service name like `mongo` because network when restart docker it was changed so service name mapping new ips
#const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
#mongoose
# .connect(URI)
# .then(() => console.log('connect to db...')
# .catch((err) => console.log('failed to connect to db:', err))

app.get('/', (req, res) => ({
  redisClient.set('products', 'products....');	
  console.log(`traffic from ${os.hostname}`);	
  res.send('<h1> Hello Mixo with watch tower! hi<h1>'));
})

app.get('/data', async (req, res) => ({
  const products = await redisClient.get('products')	
  res.send(`<h1> Hello Mixo from AWS! hi<h1> <h1>${products}</h2>`));
})


app.listen(PORT, () => console.log(`app is up Mixoooooo: ${PORT}`));




	##Refrence :(https://redis.io/docs/clients/nodejs/)	

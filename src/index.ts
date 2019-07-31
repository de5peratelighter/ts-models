// import axios, { AxiosResponse } from 'axios'

// axios.get('http://localhost:3000/users')
//   .then((response: AxiosResponse) => {
//     console.log(response.data)
//   }

import { Collection } from './models/Collection'

const collection = new Collection('http://localhost:3000/users')

collection.on('change', () => {
  console.log(collection)
})

collection.fetch();
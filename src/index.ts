import express from 'express'
import {Client, PlaceAutocompleteType} from '@googlemaps/google-maps-services-js'
import key from './key'

const client = new Client({})
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/cities/:query', async (req, res) => {
    const {query} = req.params;
    console.log('quering...')
    const placesResponse = await client.placeAutocomplete({
        params: {
            input: query,
            types: PlaceAutocompleteType.cities,
            key
        } 
    });
    const cities = placesResponse.data;
    res.json(cities)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
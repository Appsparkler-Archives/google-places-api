import {Client, PlaceAutocompleteType} from '@googlemaps/google-maps-services-js'
import { RequestHandler } from 'express';
import key from './secrets'

const client = new Client({})

const citiesMiddleware: RequestHandler = async (req, res) => {
    const {query} = req.params;
    const placesResponse = await client.placeAutocomplete({
        params: {
            input: query,
            types: PlaceAutocompleteType.cities,
            key
        } 
    });
    const cities = placesResponse.data;
    res.json(cities)
}

export default citiesMiddleware;
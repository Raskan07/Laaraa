import axios from 'axios';


export const GetPlaceDetails = (place:string) => axios.get(`/api/googlePlaces?query=${place}`);
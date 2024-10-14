import axios from 'axios';


export const GetPlaceDetails = (place:string) => axios.get(`/api/googlePlaces?query=${place}`);
export const GetPlaceInfo = (placeId: string) => {
    return axios.get(`/api/info?place_id=${placeId}`);
}
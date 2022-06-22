import axios from 'axios'





export const getPlacesData = async (type, sw, ne) => {
    
    try {
        
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'c483e89227mshdfc3034632465e6p1b7c58jsna6081d0bc39f',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        console.log(data);
        return data;
        
    } catch (error) { 
        console.log(error);
    }
}
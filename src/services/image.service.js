import axios from 'axios'
const imageApi = axios.create({
    baseURL: "https://api.pexels.com/v1/curated",
})
export default {
    getImages(per_page=35) {
        return imageApi.get('',{
            params: {
                per_page
            },
            headers:{
                'Authorization':'563492ad6f91700001000001892b4f17061142bd9351074140eadcd1'
            }
        });
    }
}
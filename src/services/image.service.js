import axios from 'axios'
const imageApi = axios.create({
    baseURL: "https://api.pexels.com/v1",
    headers:{
        'Authorization':'563492ad6f91700001000001892b4f17061142bd9351074140eadcd1'
    }
})
export default {
    getImages(per_page=80) {
        return imageApi.get('/curated',{
            params: {
                per_page
            },
        });
    },
    searchImages(query,per_page=80){
        return imageApi.get('/search',{
            params: {
                per_page,
                query
            },
        })
    }
}
import axios from 'axios'
const itemApi = axios.create({
    baseURL: "https://60516f455346090017671942.mockapi.io/api/v1/products",
})
export default {
    getItems() {
        return itemApi.get();
    }
}
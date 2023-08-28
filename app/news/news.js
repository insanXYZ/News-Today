const axios = require("axios");
require('dotenv').config();

module.exports = {
    async allnews(){
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.NEWS_API_KEY}`);
            return response.data.articles;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async newsByCategory(category){
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
            return response.data.articles;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
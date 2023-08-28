const {allnews , newsByCategory} = require('../news/news');

class newsController{

    async index(req,res){
        try {

            res.render('pages/home',{
                layout: 'layouts/layout',
                news: await allnews()
            });

        } catch (error) {
            
            console.log(error);
            
        }

    }

    async news(req,res){
        let category = null;

        if(req.query.category){
            category = req.query.category;
        }

        try {

            res.render('pages/news',{
                layout: 'layouts/layout',
                news: category != null ? await newsByCategory(category) : await allnews(),
                category,
            });

        } catch (error) {
            
            console.log(error);
            
        }

    }

}
module.exports = new newsController();
  
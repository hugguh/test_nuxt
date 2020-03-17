
const axios = require('axios');
const {Router} = require('express');
const router = Router();


router.get('/main/dashboard', async (req, res) => {
        console.log('get main/dashboard')

        await axios.get("https://jsonplaceholder.typicode.com/posts",  {
            // headers: {'Access-Token': req.app.get('api_access_token')}
        }).then((response) => {
            // console.log("RESPONSE RECEIVED: ", response['data']);
            res.json(response['data'])
        })
            .catch((e) => {
                console.log("AXIOS ERROR: ", e);
                console.log("path ",req.path)
                error = "Internal server error. Try again later."
                res.json({"error":error})
            });

});




module.exports = router;
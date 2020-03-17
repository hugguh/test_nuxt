
const axios = require('axios');
const {Router} = require('express');
const router = Router();


router.get('/user/dashboard', async (req, res) => {
    let cookies_data = req.cookies;

        await axios.get("https://jsonplaceholder.typicode.com/users/1", {
            // headers: {'Access-Token': req.app.get('api_access_token')}
        }).then((response) => {
            res.json(response['data'])
        })
            .catch((e) => {
                 console.log("AXIOS ERROR:", e);
                console.log("AXIOS ERROR:", e.response.data.message);
                console.log("ERROR path ",req.path)
                let error = "Internal server error. Try again later."
                res.status(500).json({"error_msg":error})
            });
});

module.exports = router;
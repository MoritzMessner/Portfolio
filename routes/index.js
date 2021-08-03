var express = require('express');
var router = express.Router();

const name = "Moritz Messner";
const title = "Portfolio Website";
const social = { "github": "https://github.com/MoritzMessner", "twitter": "https://twitter.com/moe_dev" };
const profile_image = "/images/Moritz Messner.jpg";


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: title, name: name, links: social, profile_image: profile_image });
});

module.exports = router;

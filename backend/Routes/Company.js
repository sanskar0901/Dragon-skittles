const router = require('express').Router();
let Company = require('../Model/Company.model');
let User = require('../Model/User.model');



router.route('/add').post(async (req, res) => {
    const { name, score, tags, desc } = req.body;

    try {
        if (!name || !tags || !score) {
            return res.status(404).json({ message: 'enter all details' })
        } else {

            const company = new Company({
                name, score, tags, desc
            });

            company.save()
                .then(() => res.json("Successfully Saved"))
                .catch((err) => res.status(404).json(`error-> ${err}`))
        }


    }
    catch (error) {
        res.status(404).json({ message: `${error} Something went wrong` })
    }
})

router.route('/score').get(async (req, res) => {
    const { score } = req.body;
    Company.find({ score: { $lt: score } })
        .then(company => res.json(company))
        .catch(err => res.status(404).json(`error-> ${err}`))
})


router.route('/').get(async (req, res) => {
    Company.find({})
        .then(company => res.json(company))
        .catch(err => res.status(404).json(`error-> ${err}`))
})


module.exports = router;
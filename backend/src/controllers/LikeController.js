const Dev = require('../models/Dev');

module.exports = {
    store(req, res){
        console.log(req.params.devId);
        console.log(req.headers.user);
        
        return res.json({ok: true});
    }
}
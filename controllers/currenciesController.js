// Controller for all /currency routes
const sql = require('../model/db.js');

module.exports = {
    getAllCurrencies(req_, res_, next) {
        sql.query("SELECT p2.id as currency_pair_id, p1.name as currency_id, rate, time_created\n" +
            "FROM currency_pairs as p1 \n" +
            "JOIN rates AS p2 ON p1.id = p2.currency_pair_id \n" +
            "WHERE p2.time_created > DATE('2019-05-16') - INTERVAL 7 DAY\n" +
            "ORDER BY p2.time_created, currency_id ", function (err, res) {
            if(err) {
                console.log("error: ", err);
                res_.status(400);
                res_.send('Bad request');
                next()
            }
            else{
                 res_.json(JSON.parse(JSON.stringify(res)));
                next()
            }
        });
    }
};
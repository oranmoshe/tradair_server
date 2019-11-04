// Controller for all /currency routes
const _app_folder = 'public/dist/tradair-client';

module.exports = {
    getHome(req_, res_, next){
        res_.sendFile('index.html', { root: _app_folder });
        next()
    }
};
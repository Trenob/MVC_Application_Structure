exports.render =
    function (req, res) {
        if (req.session.lastVist) {
            console.log(req.session.lastVist);
        }
        req.session.lastVist = new Date();
        res.render('index', {title: 'Hello Trevon'});
    };
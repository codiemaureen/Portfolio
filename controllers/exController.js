exports.homePage = (req, res) => {
    res.render('homepage', {title: 'Codie Maureen'});
};

exports.projects = (req, res) => {
    res.render('projects', {title: 'Projects'})
};

exports.resume = (req, res) => {
    res.render('resume', {title: 'Resume and Certs'});
}
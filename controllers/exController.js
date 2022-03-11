const Project = require('../models/Projects');

exports.homePage = (req, res) => {
    res.render('homepage', {title: 'Codie Maureen'});
};

exports.projects = async(req, res) => {
    const project = await Project.find();
    console.log(project);
    res.render('projects', {title: 'Projects'})
};

exports.resume = (req, res) => {
    res.render('resume', {title: 'Resume and Certs'});
}
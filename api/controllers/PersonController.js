/**
 * PersonController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
    new: (req, res) => {
		return res.view('person/new', {
			title: 'Create a new Person'
		})
	},
	create: (req, res) => {
		Person
			.create(req.body)
			.exec((err, result) => {
				if (err) {
					return res.redirect('/people/new')
				}

				return res.redirect('/people')
			})
	},
};


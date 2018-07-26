var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET blog page. */
router.get('/blog-version-2', function (req, res, next) {
	res.render('blog-version-2', { title: 'Express' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
	res.render('contact', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
	res.render('about', { title: 'Express' });
});

/* GET team page. */
router.get('/team', function (req, res, next) {
	res.render('team', { title: 'Express' });
});

/* GET career page. */
router.get('/career', function (req, res, next) {
	res.render('career', { title: 'Express' });
});

/* GET customer-reviews page. */
router.get('/customer-reviews', function (req, res, next) {
	res.render('customer-reviews', { title: 'Express' });
});

/* GET service page. */
router.get('/services', function (req, res, next) {
	res.render('services', { title: 'Express' });
});

/* GET portfolio page. */
router.get('/portfolio', function (req, res, next) {
	res.render('portfolio', { title: 'Express' });
});

/* GET html page. */
router.get('/html_css', function (req, res, next) {
	res.render('html_css', { title: 'Express' });
});

/* GET angular page. */
router.get('/angular', function (req, res, next) {
	res.render('angular', { title: 'Express' });
});

/* GET bootstrap page. */
router.get('/bootstrap', function (req, res, next) {
	res.render('bootstrap', { title: 'Express' });
});

/* GET nodejs page. */
router.get('/nodejs', function (req, res, next) {
	res.render('nodejs', { title: 'Express' });
});

/* GET reactjs page. */
router.get('/reactjs', function (req, res, next) {
	res.render('reactjs', { title: 'Express' });
});

/* GET corejs page. */
router.get('/corejs', function (req, res, next) {
	res.render('corejs', { title: 'Express' });
});

/* GET website development page. */
router.get('/website-development', function (req, res, next) {
	res.render('website-development', { title: 'Express' });
});

/* GET product development page. */
router.get('/product-development', function (req, res, next) {
	res.render('product-development', { title: 'Express' });
});

/* GET ecommerce  page. */
router.get('/ecommerce', function (req, res, next) {
	res.render('ecommerce', { title: 'Express' });
});

/* GET IOT  page. */
router.get('/iot', function (req, res, next) {
	res.render('iot', { title: 'Express' });
});

/* GET machine learning page. */
router.get('/machine-learning', function (req, res, next) {
	res.render('machine-learning', { title: 'Express' });
});

/* GET native app page. */
router.get('/native-app', function (req, res, next) {
	res.render('native-app', { title: 'Express' });
});

/* GET hybrid app page. */
router.get('/hybrid', function (req, res, next) {
	res.render('hybrid', { title: 'Express' });
});

/* GET ionic app page. */
router.get('/ionic', function (req, res, next) {
	res.render('ionic', { title: 'Express' });
});


router.post('/contact', (req, res) => {
	const email = req.body.email;
	const phone = req.body.phone;
	const full_name = req.body.full_name;
	const message = req.body.message;
	const website = req.body.website;

	if (!email || !phone || !full_name || !message || !website) {
		return res.send({ code: 0, message: "All fields are required.." });
	}
	if (!validator.isEmail(email)) return res.send({
		code: 0,
		message: "Please enter valid email address."
	});
	if (!validator.isMobilePhone(phone.toString(), 'any')) return res.send({
		code: 0,
		message: "Please enter valid phone no.."
	});
	var obj = {
		email,
		phone,
		full_name,
		website,
		message: subject
	}
		contact(obj).then(result => {

			sendMail("anup.gurav@qleverlabs.in", "\n Name : " + full_name + " <br>\n Email : " + email + " <br>\n Phone : " + phone + " <br>\n Website : " + website + " <br>\n Message : " + message + "\n\n", "Contact", "no-reply");


			console.log(result);
			res.send({ code: result, message: "success" });
		}).catch(err => {
			console.log(err);

		});
	});



module.exports = router;

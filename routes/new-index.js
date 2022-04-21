var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb+srv://<username>:<password>@<cluster>-vgz77.azure.mongodb.net/test?retryWrites=true&w=majority";
const url = "mongodb://localhost:27017";

router.get("/data", (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("HospitalData");
		dbo.collection("collection1")
			.find({})
			.toArray(function (err, result) {
				if (err) throw err;
				console.log("Mongo data coming in hot");
				console.log(result);
				res.json(result);
				db.close();
			});
	});
});

router.post("/schedule", (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("HospitalData");
		const receivedData = req.body;
		dbo.collection("schedules").insertOne(receivedData, (err, res) => {
			if (err) throw err;
			db.close();
		});
		res.json(req.body);
	});
});

router.get("/schedule", (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("HospitalData");
		dbo.collection("schedules")
			.find({})
			.toArray((err, result) => {
				if (err) throw err;
				res.json(result);
				db.close();
			});
	});
});

router.get("/doctors", (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("HospitalData");
		dbo.collection("doctors")
			.find({})
			.toArray((err, result) => {
				if (err) throw err;
				res.json(result);
				db.close();
			});
	});
});

router.post("/users/register", (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("HospitalData");
		const data = req.body;
		dbo.collection("users").insertOne(data, (err, result) => {
			if (err) throw err;
			res.json(result);
			db.close();
		});
	});
});

router.post("/users", (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("HospitalData");
		const { email, password } = req.body;
		console.log(email, password, req.body);
		dbo.collection("users")
			.find({ email: email, password: password })
			.toArray((err, result) => {
				if (err) throw err;
				res.json(result);
				db.close();
			});
	});
});

router.post("/registerDoctor", (req, res, next) => {
	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("HospitalData");
		const receivedData = req.body;
		dbo.collection("doctors").insertOne(receivedData, (err, result) => {
			if (err) throw err;
			res.json(result);
			db.close();
		});
	});
});

module.exports = router;

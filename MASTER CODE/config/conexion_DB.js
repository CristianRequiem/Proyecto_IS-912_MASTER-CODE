var mysql = require('mysql');

module.exports = () => {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'oracle',
		database: 'db_mastercode',
		port: '3306'
	})
}
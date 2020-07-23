require('dotenv').config();

module.exports={	

	  "development": {
	    "username": "root",
	    "password": "",
	    "database": "enumerate",
	    "host": "127.0.0.1",
	    "dialect": "mysql",
	    "secret":process.env.SECRET,
	  },
	  "test": {
	    "username": "",
	    "password": "",
	    "database": "",
	    "host": "127.0.0.1",
	    "dialect": "postgres"
	  },

	  "production": {
	    "username": process.env.DB_USER,
	    "password": process.env.DB_PASS,
	    "database": process.env.DB_NAME,
	    "host": process.env.DB_HOST,
	    "dialect": "postgres",
	    "secret":process.env.SECRET,
	  }

};



import * as dotenv from 'dotenv'
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// author
const AUTHOR: string = process.env.AUTHOR || 'Omar Elhamy'

// application
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const PORT: number = +process.env.PORT || 3000

// mlab
const MLAB_USER = process.env.MLAB_USER || 'home_admin'
const MLAB_PASS = process.env.MLAB_PASS || 'P@ssw0rd42'
const MLAB_HOST = process.env.MLAB_HOST || 'cluster0.og5na.mongodb.net'
const MLAB_DATABASE = process.env.MLAB_DATABASE || 'idrive'
const MLAB_URL = `mongodb+srv://${MLAB_USER}:${MLAB_PASS}@${MLAB_HOST}/${MLAB_DATABASE}`

// jwt
const JWT_TOKEN_SECRET: string =
	process.env.JWT_TOKEN_SECRET || 'access-token-secret'

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10

// nodemailer
const NODEMAILER_USER: string = process.env.NODEMAILER_USER || 'xxx'
const NODEMAILER_PASS: string = process.env.NODEMAILER_PASS || 'xxx'

export {
	NODE_ENV,
	AUTHOR,
	DOMAIN,
	PORT,
	MLAB_USER,
	MLAB_PASS,
	MLAB_HOST,
	MLAB_DATABASE,
	MLAB_URL,
	JWT_TOKEN_SECRET,
	BCRYPT_SALT,
	NODEMAILER_USER,
	NODEMAILER_PASS,
}
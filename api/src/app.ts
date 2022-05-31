import express from 'express'
import passport from 'passport' 
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'
import keys from './config/keys'

//Initialization
const app = express()

// Importing routes
import productRoutes from './routers/product'
import userRoutes from './routers/user'
import adminRoutes from './routers/admin'
//More routes
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import loginWithGoogle from './passport/GoogleStrategy'

// Express configuration
app.set('port', keys.PORT || 4000)

// Global middleware
app.use(apiContentType)
app.use(express.json())
//Other middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
//Passport middleware
app.use(passport.initialize())
passport.use(loginWithGoogle())

// Set up routers
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use(adminRoutes)

// Custom API error handler
app.use(apiErrorHandler)

export default app

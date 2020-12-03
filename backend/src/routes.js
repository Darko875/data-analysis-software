const express = require('express')
const routes = express.Router()


const ProfileController = require('./controllers/ProfileController')
const ContractsController = require('./controllers/ContractsController')


routes.get('/', ProfileController.index)
routes.post('/', ProfileController.search)

routes.get('/contracts-sum', ContractsController.index)
routes.get('/contract-max', ContractsController.search_max)


routes.get('/contracts-sum-2008', ContractsController.search_sum_2008)
routes.get('/contract-max-2008', ContractsController.search_max_2008)
routes.get('/contracts-sum-2009', ContractsController.search_sum_2009)
routes.get('/contract-max-2009', ContractsController.search_max_2009)
routes.get('/contracts-sum-2010', ContractsController.search_sum_2010)
routes.get('/contract-max-2010', ContractsController.search_max_2010)
routes.get('/contracts-sum-2011', ContractsController.search_sum_2011)
routes.get('/contract-max-2011', ContractsController.search_max_2011)


routes.get('/contract-number-2008', ContractsController.search_max_2008_companies)
routes.get('/contract-number-2009', ContractsController.search_max_2009_companies)
routes.get('/contract-number-2010', ContractsController.search_max_2010_companies)
routes.get('/contract-number-2011', ContractsController.search_max_2011_companies)


module.exports = routes;
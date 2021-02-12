// ======== Transaction
// import all modules
const express = require('express')

// import all controllers
const transactionController = require('../controllers/transactionController')

// import all middlewares
const authMiddleware = require('../middlewares/auth')
const transactionMiddleware = require('../middlewares/transaction')

// init router
const router = express.Router()

router.post(
  '/transfer',
  authMiddleware.authCheck,
  transactionMiddleware.checkTransactionForm,
  transactionController.createTransfer
)

module.exports = router
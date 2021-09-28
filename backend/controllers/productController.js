import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/producs
// @access Public..

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @desc Fetch single products
// @route GET /api/producs:ID
// @access Public..

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    throw new Error('Product not found')
  }
})

export {getProducts, getProductById}

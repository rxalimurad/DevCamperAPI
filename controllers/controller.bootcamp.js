const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require('../middlewares/async')
const Bootcamp = require("../models/model.bootcamp.js");


// @desc        Get all bootcamp
// @route       GET /api/v1/bootcamps
// @access      Public

exports.getAllBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public

exports.getBootCamp = asyncHandler(async (req, res, next) => {
  try {

  } catch (error) {
    next(err);
  }
});

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps/:id
// @access      Private

exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const newBootCamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: newBootCamp,
    });
});

// @desc        Update bootcamp
// @route       Put /api/v1/bootcamps/:id
// @access      Private

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validators: true,
  });
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp with not found with id of ${req.params.id}`))
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});

// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp with not found with id of ${req.params.id}`))
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
});
 

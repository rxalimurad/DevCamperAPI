const bootcamp = require('../models/bootcamp')
const Bootcamp = require('../models/bootcamp')

// @desc        Get all bootcamp
// @route       GET /api/v1/bootcamps
// @access      Public

exports.getAllBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'})
}

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public

exports.getBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Get bootcamp with id = ' + req.params.id})
}

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps/:id
// @access      Private

exports.createBootcamp = async (req, res, next) => {
    try {
        const newBootCamp = await Bootcamp.create(req.body);
    res.status(201).json({
        success: true,
        data: newBootCamp
    })
}
     catch(err) {
        res.status(400).json({
            success: true,
            err: err
        })
    }
}

// @desc        Update bootcamp
// @route       Put /api/v1/bootcamps/:id
// @access      Private

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'update bootcamp with id = ' + req.params.id})
}


// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'delete bootcamp with id = ' + req.params.id})
}
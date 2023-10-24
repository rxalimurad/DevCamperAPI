// @desc        Get all bootcamp
// @route       GET /api/v1/bootcamps
// @access      Public

exports.getBootCamp = (req, res, next) => {
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

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create new bootcamp'})
}


// @desc        Update bootcamp
// @route       Put /api/v1/bootcamps/:id
// @access      Private

exports.updateBootcamp = (req, res, next) => {
    req.status(200).json({ success: true, msg: 'update bootcamp with id = ' + req.params.id})
}


// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'delete bootcamp with id = ' + req.params.id})
}
const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('../middlewares/async');
// @desc    get all bootcamps data
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = asyncHandler(async(req, res, next) => {
    const bootcamps = await Bootcamp.find();
    res
        .status(200)
        .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc    get a single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  public
exports.getBootcamp = asyncHandler(async(req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
        return next(
            new ErrorResponse(`Bootcamp not found with ${req.params.id}`, 404)
        );
    }
    res.status(200).json({ success: true, data: bootcamp });
});

// @desc    create a single bootcamp
// @route   POST /api/v1/bootcamps
// @access  private
exports.createBootcamp = asyncHandler(async(req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);
    // console.log(bootcamp);

    res.status(201).json({ success: true, data: bootcamp });
});

// @desc    update a bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  private
exports.updateBootcamp = asyncHandler(async(req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!bootcamp) {
        return next(
            new ErrorResponse(`Bootcamp not found with ${req.params.id}`, 404)
        );
    }
    res.status(200).json({ success: true, data: bootcamp });
});

// @desc    delete a bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  private
exports.deleteBootcamps = asyncHandler(async(req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
        return next(
            new ErrorResponse(`Bootcamp not found with ${req.params.id}`, 404)
        );
    }
    res.status(200).json({ success: true, data: {} });
});
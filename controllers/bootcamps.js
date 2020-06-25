const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');
// @desc    get all bootcamps data
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = async(req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res
            .status(200)
            .json({ success: true, count: bootcamps.length, data: bootcamps });
    } catch (err) {
        next(err);
    }
};

// @desc    get a single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  public
exports.getBootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return next(
                new ErrorResponse(`Bootcamp not found with ${req.params.id}`, 404)
            );
        }
        res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
        // console.log(err);
        // res.status(400).json({ success: false });
        // next(new ErrorResponse(`Bootcamp not found with ${req.params.id}`, 404));
        next(err);
    }
};

// @desc    create a single bootcamp
// @route   POST /api/v1/bootcamps
// @access  private
exports.createBootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        // console.log(bootcamp);

        res.status(201).json({ success: true, data: bootcamp });
    } catch (err) {
        next(err);
    }
};

// @desc    update a bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  private
exports.updateBootcamp = async(req, res, next) => {
    try {
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
    } catch (err) {
        next(err);
    }
};

// @desc    delete a bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  private
exports.deleteBootcamps = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return next(
                new ErrorResponse(`Bootcamp not found with ${req.params.id}`, 404)
            );
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        next(err);
    }
};
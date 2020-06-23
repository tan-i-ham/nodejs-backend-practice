// @desc    get all bootcamps data
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ msg: 'show all bootcamps', hello: req.hello });
};

// @desc    get a single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ msg: `get one bootcamp, id is ${req.params.id}` });
};

// @desc    create a single bootcamp
// @route   POST /api/v1/bootcamps
// @access  private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ msg: 'create a bootcamp' });
};

// @desc    update a bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ msg: `update one bootcamp, id is ${req.params.id}` });
};

// @desc    delete a bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  private
exports.deleteBootcamps = (req, res, next) => {
  es.status(200).json({ msg: `delete one bootcamp, id is ${req.params.id}` });
};

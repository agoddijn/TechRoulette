/**
 * GET /
 * Landing page.
 */
exports.index = (req, res) => {
  res.render('landing', {
    title: 'Landing'
  });
};

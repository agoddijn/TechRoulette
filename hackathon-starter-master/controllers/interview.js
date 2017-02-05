/**
 * GET /
 * Interview page.
 */
exports.getInterview = (req, res) => {
  res.render('interview', {
    title: 'Interview'
  });
};

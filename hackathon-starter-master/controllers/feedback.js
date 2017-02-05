/**
 * GET /
 * Home page.
 */
exports.getFeedback = (req, res) => {
  res.render('feedback', {
    title: 'Feedback'
  });
};

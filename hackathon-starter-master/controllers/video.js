/**
  * GET /video
  * Video page
  */

exports.getVideo = (req,res) => {
  res.render('video', {
    title: 'Video'
  });
};
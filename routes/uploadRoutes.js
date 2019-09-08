// Refer https://www.youtube.com/watch?v=ASuU4km3VHE&t=380s&list=WL&index=22
// For further details

const express = require('express');
const router = express.Router();

const upload = require('../utility/fileUpload');

// For multiple images upload.array('photos', 3),
// Refer https://www.npmjs.com/package/multer-s3

// const singleUpload = upload.single('image');

// router.post('/image-upload', function(req, res) {

//   singleUpload(req, res, function(err) {

//     if (err) {
//       return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
//     }

//     // return res.json({'imageUrl': req.file.location});
//     res.send(req.file.location)
//   });
// });

router.post('/fileupload', upload.single('image'), (req, res) => {

  res.send({
    count: req.file.metadata.count,
    location: req.file.location
  })
})

module.exports = router;
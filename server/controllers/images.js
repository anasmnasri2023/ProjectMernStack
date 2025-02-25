const usersModel = require("../models/users");
const upload = require("../config/multer");
const uploadImage = upload.single("picture");
const imagesValidation = require("../validation/imagesValidation");

const Upload = async (req, res) => {
  try {
    uploadImage(req, res, async function (err) {
      const { errors, isValid } = imagesValidation(req);
      if (err) {
        errors.picture = err.message;
        return res.status(404).json(errors);
      } else {
        if (!isValid) {
          return res.status(404).json(errors);
        } else {
          const image = {
            picture: "/images/" + req.file.filename,
          };
          const User = await usersModel.findOneAndUpdate(
            {
              _id: req.user._id,
            },
            image,
            {
              new: true,
              upsert: true,
            }
          );
          res.status(200).send({
            status: "success",
            data: User,
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  Upload,
};

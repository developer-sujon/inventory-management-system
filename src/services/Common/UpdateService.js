//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//Internal Import
const { CreateError } = require("../../helper/ErrorHandler");

const UpdateService = async (Request, DataModel) => {
  const UserId = Request.UserId;
  const UpdateID = Request.params.id;
  const PostBody = Request.body;
  PostBody.UserId = UserId;

  return DataModel.updateOne({ _id: UpdateID, UserId: UserId }, PostBody, {
    new: true,
  });
};

module.exports = UpdateService;

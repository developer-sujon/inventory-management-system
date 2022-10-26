//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

const DetailsService = async (Request, DataModel) => {
  const DetailsID = Request.params.id;
  const UserId = Request.UserId;

  const data = await DataModel.aggregate([
    {
      $match: {
        $and: [{ UserId: UserId }, { _id: ObjectId(DetailsID) }],
      },
    },
  ]);

  return data;
};

module.exports = DetailsService;

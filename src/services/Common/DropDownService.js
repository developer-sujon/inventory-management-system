const DropDownService = async (Request, DataModel, Projection) => {
  const UserId = Request.UserId;
  const data = DataModel.aggregate([
    { $match: { UserId: UserId } },
    { $project: Projection },
  ]);
  return data;
};

module.exports = DropDownService;

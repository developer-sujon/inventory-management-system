const DropDownService = async (Request, DataModel, MatchQuery, Projection) => {
  const UserId = Request.UserId;
  const data = DataModel.aggregate([
    { $match: { UserId: UserId } },
    { $match: MatchQuery },
    { $project: Projection },
  ]);
  return data;
};

module.exports = DropDownService;

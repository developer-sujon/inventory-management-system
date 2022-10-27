const ListFourJoinService = async (
  Request,
  DataModel,
  SearchArray,
  JoinStageOne,
  JoinStageTwo,
  JoinStageThree,
  JoinStageFour,
  projection,
) => {
  const UserId = Request.UserId;
  const searchKeyword = Request.params.searchKeyword;
  const pageNumber = +Request.params.pageNumber;
  const perPage = +Request.params.perPage;

  const skipRow = (pageNumber - 1) * perPage;

  if (searchKeyword !== "0") {
    return await DataModel.aggregate([
      {
        $match: { UserId: UserId },
      },
      JoinStageOne,
      JoinStageTwo,
      JoinStageThree,
      JoinStageFour,
      {
        $match: { $or: SearchArray },
      },
      {
        $facet: {
          Total: [{ $count: "count" }],
          Data: [{ $skip: skipRow }, { $limit: perPage }, projection],
        },
      },
    ]);
  } else {
    return await DataModel.aggregate([
      {
        $match: { UserId: UserId },
      },
      JoinStageOne,
      JoinStageTwo,
      JoinStageThree,
      JoinStageFour,
      {
        $facet: {
          Total: [{ $count: "count" }],
          Data: [{ $skip: skipRow }, { $limit: perPage }, projection],
        },
      },
    ]);
  }
};

module.exports = ListFourJoinService;

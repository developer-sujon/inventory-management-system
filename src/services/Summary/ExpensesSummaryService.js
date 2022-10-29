const ExpensesSummaryService = async (Request, DataModel) => {
  const UserEmail = Request.Email;

  const data = await DataModel.aggregate([
    {
      $match: {
        UserEmail: UserEmail,
      },
    },
    {
      $facet: {
        Total: [
          {
            $group: {
              _id: 0,
              TotalExpenseAmount: { $sum: "$ExpenseAmount" },
            },
          },
        ],
        Rows: [
          {
            $group: {
              _id: {
                $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
              },
              TotalExpenseAmount: { $sum: "$ExpenseAmount" },
            },
          },
          { $sort: { _id: -1 } },
          { $limit: 30 },
        ],
      },
    },
  ]);

  return data;
};

module.exports = ExpensesSummaryService;

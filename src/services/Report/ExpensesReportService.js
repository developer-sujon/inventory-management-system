const ExpensesReportService = async (Request, DataModel) => {
  const UserId = Request.UserId;
  const FormDate = Request.body.FormDate;
  const ToDate = Request.body.ToDate;

  const data = await DataModel.aggregate([
    {
      $match: {
        UserId: UserId,
        createdAt: { $gte: new Date(FormDate), $lte: new Date(ToDate) },
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
            $lookup: {
              from: "expensetypes",
              localField: "ExpenseType",
              foreignField: "_id",
              as: "ExpenseType",
            },
          },
          {
            $project: {
              ExpenseType: 1,
              ExpenseType: { $first: "$ExpenseType.Name" },
              ExpenseName: 1,
              ExpenseAmount: 1,
              ExpenseNote: 1,
              createdAt: 1,
            },
          },
        ],
      },
    },
  ]);

  return data;
};

module.exports = ExpensesReportService;

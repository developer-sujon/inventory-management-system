const UserDetailsService = async (Request, DataModel) => {
  const { Email } = Request;

  return await DataModel.aggregate([
    { $match: { Email: Email } },
    {
      $project: {
        Password: 0,
      },
    },
  ]);
};
module.exports = UserDetailsService;

const UserListService = async (Request, UsersModel) => {
  return await UsersModel.aggregate([
    {
      $project: {
        Password: 0,
      },
    },
  ]);
};

module.exports = UserListService;

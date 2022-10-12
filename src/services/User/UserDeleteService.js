const UserDeleteService = async (Request, DataModel) => {
  const { Email } = Request;
  return await DataModel.deleteOne({ Email: Email });
};
module.exports = UserDeleteService;

const CreateService = async (Request, DataModel) => {
  const PostBody = Request.body;
  PostBody.UserId = Request.UserId;

  const data = new DataModel(PostBody);
  return await data.save();
};

module.exports = CreateService;

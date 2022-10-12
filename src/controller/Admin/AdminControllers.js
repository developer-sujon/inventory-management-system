//Internal Import
const UsersModel = require("../../model/Users/UsersModel");
const SelectAllUserService = require("../../services/User/UserListService");
const UserDetailsService = require("../../services/User/UserDetailsService");
const BlockUserService = require("../../services/User/UserBlockService");
const UserActiveService = require("../../services/User/UserActiveService");

/**
 * @desc Select All User
 * @access private
 * @route /api/v1/Admin/SelectAllUser
 * @methud GET
 */

const SelectAllUser = async (req, res, next) => {
  try {
    const result = await SelectAllUserService(req, UsersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Select User
 * @access private
 * @route /api/v1/Admin/SelectUser/:Email
 * @methud GET
 */

const SelectUser = async (req, res, next) => {
  try {
    const result = await UserDetailsService(req, UsersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Block User
 * @access private
 * @route /api/v1/Admin/BlockUser/:Email
 * @methud PUT
 */

const BlockUser = async (req, res, next) => {
  try {
    const result = await BlockUserService(req, UsersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Unblock User
 * @access private
 * @route /api/v1/Admin/UnblockUser/:Email
 * @methud PUT
 */

const UnblockUser = async (req, res, next) => {
  try {
    const result = await UserActiveService(req, UsersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  SelectAllUser,
  SelectUser,
  BlockUser,
  UnblockUser,
};

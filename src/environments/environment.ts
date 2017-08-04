// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

const USER_PREFIX = '/app-api/user';
const COOKBOOK_PREFIX = '/app-api/cookbook';

export const apis = {
  register: () => `${USER_PREFIX}/register`, // 注册接口
  getUserInfo: () => `${USER_PREFIX}/info`, // 获取用户信息
  bindCouple: () => `${USER_PREFIX}/bind`, //绑定情侣
  logout: () => `${USER_PREFIX}/logout`, //退出登录
  login: () => `${USER_PREFIX}/login`, //登录
  userInfo: () => `${USER_PREFIX}/info`, //用户信息获取接口

  cookList: () => `${COOKBOOK_PREFIX}/list`,  //菜谱列表接口
};

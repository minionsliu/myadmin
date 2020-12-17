import myaxios from "@/utils/myaxios";
/* 用户登录接口 */
const login = (data) => myaxios.post("admin/login", data);
/* 用户注册量 */
const getUserCount = (date) => myaxios.get("/statis/user/" + date + "/count");
/* 所有用户注册量 */
const getAllUserCount = (date) => myaxios.get("/v1/users/count");
/* 某天的订单数量 */
const getOrderCount = (date) => myaxios.get("/statis/order/" + date + "/count");
/* 获取所有的订单数量 */
const getAllOrderCount = () => myaxios.get("/bos/orders/count");
/* 新增注册的管理员 */
const getAdminCount = (date) => myaxios.get("/statis/admin/" + date + "/count");
/* 获取管理员数量 */
const getAllAdminCount = () => myaxios.get("/admin/count");
/* 获取用户列表 */
const getUserList = (data) =>
  myaxios.get("/v1/users/list", {
    params: data,
  });
/* 获取管理员列表 */
const getAdminList = (data) =>
  myaxios.get("/admin/all", {
    params: data,
  });
/* 获取订单列表 */
const getOrderList = (data) => myaxios.get("/bos/orders", {
    params: data,
  });
/* 获取商铺数量 */
const getRestaurantsCount = (data) => myaxios.get("/shopping/restaurants/count");

/* 获取餐馆列表 */
const getRestaurantsList = (data) => myaxios.get("/shopping/restaurants", {
    params: {
      latitude: 0,
      longitude: 0,
      ...data,
    },
  });
/* 搜索地点 */
const searchPlace = (data) => myaxios.get("/v1/pois", { params: {...data,city_id: 11,type: "search",}});
/* 食品分类 */
const foodCategory = (latitude, longitude) => myaxios.get("/shopping/v2/restaurant/category");
/* 更新餐馆 */
const updateShop = (data) => myaxios.post("/shopping/updateshop", data);

/* 获取管理员信息 */
const getAdminInfo = () => myaxios.get("/admin/info");
/* 删除餐馆信息 */
const deleteResturant = (restaurant_id) =>
  myaxios.delete("/shopping/restaurant/" + restaurant_id);
// getFoods, getFoodsCount, getMenu, updateFood, deleteFood, getResturantDetail, getMenuById
/* 获取食品列表 */
const getFoods = (data) =>
  myaxios.get("/shopping/v2/foods", {
    params: data,
  });
/* 获取食品数量 */
const getFoodsCount = (data) =>
  myaxios.get("/shopping/v2/foods/count", {
    params: data,
  });
/* 获取食品列表 */
const getMenu = (data) =>
  myaxios.get("/shopping/v2/menu", {
    params: data,
  });
/**
 * 更新食品信息
 */

const updateFood = (data) => myaxios.post("/shopping/v2/updatefood", data);
/* 删除食品 */
const deleteFood = (food_id) => myaxios.delete("/shopping/v2/food/" + food_id);

/**
 * 获取餐馆详细信息
 */

const getResturantDetail = (restaurant_id) =>
  myaxios.get("/shopping/restaurant/" + restaurant_id);

/**
 * 获取menu详情
 */

const getMenuById = (category_id) =>
  myaxios.get("/shopping/v2/menu/" + category_id);

/**
 * 添加商铺
 */

export const addShop = data => myaxios.post('/shopping/addShop', data);
/**
 * 获取定位城市
 */

export const cityGuess = () =>
  myaxios.get("/v1/cities", {
    params: {
      type: "guess",
    },
  });

  /**
 * 添加食品种类
 */

export const addCategory = data => myaxios.post('/shopping/addcategory', data);
  /**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => myaxios.get('/shopping/getcategory/' + restaurant_id);
/**
 * 添加食品
 */

export const addFood = data => myaxios.post('/shopping/addfood', data);

export {
  getFoods,
  getFoodsCount,
  getMenu,
  updateFood,
  deleteFood,
  getResturantDetail,
  getMenuById,
  deleteResturant,
  getAdminInfo,
  updateShop,
  foodCategory,
  searchPlace,
  getRestaurantsList,
  getRestaurantsCount,
  login,
  getUserCount,
  getAdminCount,
  getUserList,
  getOrderCount,
  getAllAdminCount,
  getAllOrderCount,
  getAllUserCount,
  getAdminList,
  getOrderList,
};

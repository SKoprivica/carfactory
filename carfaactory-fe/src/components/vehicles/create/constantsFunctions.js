
import { CATEGORY_CONST, TYPE_LIST, TYPE_CONST } from "./constants"

export const getPropsForCategory = (category) => {
  if (category === CATEGORY_CONST.CAR.type) {
    return CATEGORY_CONST.CAR
  }
  if (category === CATEGORY_CONST.BUS.type) {
    return CATEGORY_CONST.BUS;
  }

  if (category === CATEGORY_CONST.TRUCK.type) {
    return CATEGORY_CONST.TRUCK
  }
  return null;
}


export const getTypeFieldsArrayForCategory = (category) => {
  if (category === TYPE_LIST.CAR.name) {
    return TYPE_LIST.CAR.fields;
  }
  if (category === TYPE_LIST.BUS.name) {
    return TYPE_LIST.BUS.fields;
  }

  if (category === TYPE_LIST.TRUCK.name) {
    return TYPE_LIST.TRUCK.fields;
  }
  return [];
}

export const getPropsForType = ( type ) => {
  if (type === TYPE_CONST.CLASSIC.type) {
    return TYPE_CONST.CLASSIC;
  }
  if (type === TYPE_CONST.CABRIOLET.type) {
    return TYPE_CONST.CABRIOLET;
  }
  if (type === TYPE_CONST.INTERCITY_BUS.type) {
    return TYPE_CONST.INTERCITY_BUS;
  }
  if (type === TYPE_CONST.CITY_BUS.type) {
    return TYPE_CONST.CITY_BUS;
  }
  if (type === TYPE_CONST.TOW_TRUCK.type) {
    return TYPE_CONST.TOW_TRUCK;
  }
  if (type === TYPE_CONST.TANK_TRUCK.type) {
    return TYPE_CONST.TANK_TRUCK;
  }
  return null;
}
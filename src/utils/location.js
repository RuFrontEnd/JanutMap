import { fixNumber } from "utils/number";
import { deepClone } from "utils/clone";

export const getLocation = (handleLocation) => {
  new Promise((resolve) => {
    // 非同步
    navigator.geolocation.getCurrentPosition((position) => {
      const _latitude = fixNumber(position.coords.latitude, 1);
      const _longitude = fixNumber(position.coords.longitude, 1);
      const _location = {
        latitude: _latitude,
        longitude: _longitude,
      };
      resolve(_location);
    });
  }).then((res) => {
    const location = deepClone(res);
    handleLocation(location);
  });
};

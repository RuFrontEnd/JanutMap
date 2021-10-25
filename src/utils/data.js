import axios from "axios";
import { deepClone } from "utils/clone";

export const setAxiosDefaultURL = (url) => (axios.defaults.baseURL = url);

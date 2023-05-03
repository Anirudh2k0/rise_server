import { getUser } from "@/utils/authUtils";

const token = getUser(true);

const config = {
  apiEndpoint: "http://localhost:9000/api",
  // apiEndpoint: "http://100.26.144.173:37141/api",
  headers: {
    "x-auth-token": token,
  },
};
export default config;

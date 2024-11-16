const backEndDomain = "http://localhost:3000";

const SummaryApi = {
  signup: {
    url: `${backEndDomain}/api/signup`,
    method: "post",
  },
  login: {
    url: `${backEndDomain}/api/signin`,
    method: "post",
  },
  userDetails: {
    url: `${backEndDomain}/api/userdetails`,
    method: "get",
  },
  logOut: {
    url: `${backEndDomain}/api/userlogout`,
    method: "get",
  },
  allUsers: {
    url: `${backEndDomain}/api/allusers`,
    method: "get",
  },
  updateUser: {
    url: `${backEndDomain}/api/updateuser`,
    method: "post",
  },
};

export default SummaryApi;

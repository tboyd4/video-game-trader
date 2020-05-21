import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("/register", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      userName: newUser.userName,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", JSON.stringify(response.data.id));
      console.log(response.data, "responsedata");
      console.log("Registered");
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const login = (user) => {
  return axios
    .post("/login", {
      userName: user.userName,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", JSON.stringify(response.data.id));
      console.log(response.data.id);
      console.log("logged in");
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const logout = () => {
  return axios.get("/api/logout");
};

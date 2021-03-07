require("dotenv").config();
const express = require("express");
const axios = require("axios");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const router = express.Router();
const verifyToken = require("../functions/verifyToken");
const { axiosErrorLogger, errorLogger } = require("../functions/logger");

router.get("/", function (req, res, next) {
  const chatContents = {
    resultCode: 200,
    data: {
      1: { name: "user1", message: "안녕, 난 원진신이다", date: "11:40AM" },
      2: { name: "user1", message: "안녕, 원진신이 또 보낸다", date: "11:40AM" },
      3: { name: "user2", message: "안녕, 난 송원진이다", date: "11:41AM" },
      4: { name: "user2", message: "만나서 반갑다", date: "11:42AM" },
      5: { name: "user1", message: "나이스트 미츄 투", date: "11:43AM" },
    },
  };
  res.status(200).json(chatContents);
});

router.post("/", multipartMiddleware, (req, res, next) => {
  return axios
    .post(`https://dummydomain.kr`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      data: {
        info,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      try {
        axiosErrorLogger(error.response.data);
        res.json({ msg: "error occured" });
      } catch (error) {
        errorlogger(error);
        res.json({ msg: "error occured" });
      }
    });
  res.end();
});

module.exports = router;

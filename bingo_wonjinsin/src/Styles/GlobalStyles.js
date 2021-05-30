import { createGlobalStyle } from "styled-components"; // GlobalStyle을 만들기
import backImg from "../images/background.jpg";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
    text-align: center;
  }
  html{
    color: ${props=>props.theme.blackColor};
    background-image: url(${backImg});
  }
`;
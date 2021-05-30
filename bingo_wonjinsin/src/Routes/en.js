import React from 'react';
import { Helmet } from "react-helmet";
import Board from "../Components/Board";
import BingoImg from "../images/bingo_image.png";



export default() => {
  return (
    <>
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:site_name" content="Let's play Bingo!" />
      <meta name="title" content="Let's play Bingo!" />
      <meta property="og:title" content="Let's play Bingo!"/>
      <meta name="twitter:title" content="Let's play Bingo!" />

      <meta name="description" content="Simple Bingo Game!" />
      <meta property="og:description" content="Simple Bingo Game!" />
      <meta name="twitter:description" content="Simple Bingo Game!" />
      <meta itemprop="description" content="Simple Bingo Game!" />

     <meta name="keywords" content="Bingo" />
     <meta name="author" content="Wonjinsin_Bingo" />
     <meta name="twitter:creator" content="Wonjinsin_Bingo" />

     <meta property="og:type" content="article" />
     <meta property="og:image" content={BingoImg} />
     <meta name="twitter:image" content={BingoImg} />
     <meta itemprop="image" content={BingoImg} />

     <meta name="twitter:card" content="summary" />
     <meta property="og:url" content="https://bingowonjinsin.ga/#/en" />
     <meta name="twitter:site" content="https://bingowonjinsin.ga/#/en" />

     <meta property="article:section" content="Bingo" />
     <meta property="article:tag" content="Bingo" />

     <meta itemprop="name" content="Let's play Bingo!" />
     <meta property="fb:admins" content="Facebook numberic ID" />
     <meta property="og:locale" content="ko_KR" />

     <link rel="icon" href={BingoImg} />
     <link rel="shortcut icon" href={BingoImg} type="image/png" />
     <link rel="apple-touch-icon" href={BingoImg} type="image/png" />

     <title>Let's play Bingo!</title>
    </Helmet>
    <Board isEnglish={true}/>
    </>
  );
};

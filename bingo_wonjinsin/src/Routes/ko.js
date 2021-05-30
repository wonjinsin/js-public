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
      <meta name="viewport" content="width=600, height=600, initial-scale=1" />
      <meta property="og:site_name" content="빙고(Bingo) 게임하기" />
      <meta name="title" content="빙고(Bingo) 게임하기" />
      <meta property="og:title" content="빙고(Bingo) 게임하기"/>
      <meta name="twitter:title" content="빙고(Bingo) 게임하기" />

      <meta name="description" content="간단히 즐길 수 있는 빙고(Bingo) 게임" />
      <meta property="og:description" content="간단히 즐길 수 있는 빙고(Bingo) 게임" />
      <meta name="twitter:description" content="간단히 즐길 수 있는 빙고(Bingo) 게임" />
      <meta itemprop="description" content="간단히 즐길 수 있는 빙고(Bingo) 게임" />

     <meta name="keywords" content="빙고, Bingo" />
     <meta name="author" content="Wonjinsin_Bingo" />
     <meta name="twitter:creator" content="Wonjinsin_Bingo" />

     <meta property="og:type" content="article" />
     <meta property="og:image" content={BingoImg} />
     <meta name="twitter:image" content={BingoImg} />
     <meta itemprop="image" content={BingoImg} />

     <meta name="twitter:card" content="summary" />
     <meta property="og:url" content="https://bingowonjinsin.ga/" />
     <meta name="twitter:site" content="https://bingowonjinsin.ga/" />

     <meta property="article:section" content="빙고, Bingo" />
     <meta property="article:tag" content="빙고, Bingo" />

     <meta itemprop="name" content="빙고(Bingo) 게임하기" />
     <meta property="fb:admins" content="Facebook numberic ID" />
     <meta property="og:locale" content="ko_KR" />

     <link rel="icon" href={BingoImg} />
     <link rel="shortcut icon" href={BingoImg} type="image/png" />
     <link rel="apple-touch-icon" href={BingoImg} type="image/png" />

     <title>빙고(Bingo) 게임하기</title>
    </Helmet>
    <Board />
    </>
  );
};

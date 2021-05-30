import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const FEED_QUERY = gql`
{
  seeFeed {
    id
    location
    caption
    user {
      id
      avatar
      username
    }
    files {
      id
      url
    }
    likeCount
    isLiked
    comments {
      id
      text
      user {
        id
        username
      }
    }
    createdAt
  }
}
`;

const SEE_FULLPOST = gql`
  query seeFullPost($id: String!){
    seeFullPost(id: $id){
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const PostId = (id) => {
  const data = useQuery(SEE_FULLPOST, {
    variables: {
      id: id
    }
  });
  return data;
}

export default ({match}) => {
  const isFullPost = match.params.postId !== undefined;
  const { data, loading } = isFullPost ? PostId(match.params.postId) : useQuery(FEED_QUERY);

  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Prismagram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        !isFullPost &&
        data.seeFeed &&
        data.seeFeed.map(post => (
          <Post
            key={post.id}
            id={post.id}
            location={post.location}
            caption={post.caption}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            createdAt={post.createdAt}
          />
        )
      )}
      {!loading &&
        isFullPost &&
        data &&
        data.seeFullPost &&
        <Post
          key={data.seeFullPost.id}
          id={data.seeFullPost.id}
          location={data.seeFullPost.location}
          caption={data.seeFullPost.caption}
          user={data.seeFullPost.user}
          files={data.seeFullPost.files}
          likeCount={data.seeFullPost.likeCount}
          isLiked={data.seeFullPost.isLiked}
          comments={data.seeFullPost.comments}
          createdAt={data.seeFullPost.createdAt}
        />
      }
    </Wrapper>
  );
};

import { gql } from '@apollo/client';

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      username
      comments {
        id
        username
        body
        createdAt
      }
      likes {
        username
      }
      likeCount
      commentCount
      createdAt
    }
  }
`;
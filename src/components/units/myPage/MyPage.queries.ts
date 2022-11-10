import { gql } from "@apollo/client";

// 유저 정보 확인 API (accessToken필요)
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn
  }
`;

// 내가 찜한 API
export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      remarks
      price
      createdAt
      seller {
        name
      }
      buyer {
        name
      }
    }
  }
`;

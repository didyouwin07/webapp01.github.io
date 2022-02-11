import { gql } from "@apollo/client";

const getHomePageDetails = gql`
  {
    HomePageDetails(id: 1) {
      title
      content
    }
  }
`;

export { getHomePageDetails };

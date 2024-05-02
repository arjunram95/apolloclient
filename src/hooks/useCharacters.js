import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS); // obj.error      obj.data       obj.loading
  return { error, data, loading };
};

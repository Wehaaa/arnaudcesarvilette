export const LANDING_FIELDS = `
  fragment LandingFields on Landing {
    id
    title 
    excerpt
    date
    uri
    featuredImage {
      node {
        sourceUrl
        altText
        title
      }
    }
  }
`;

export const GET_LANDINGS = `
  ${LANDING_FIELDS}
  query GetLandings($first: Int = 6, $after: String) {
    landings(first: $first, after: $after) {
      nodes {
        ...LandingFields
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const GET_LANDING = `
  query LandingQuery($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
    contentNode(id: $slug, idType: $idType) {
      ...on Landing {
        id
        content
        title
        date
        uri
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
      }
    }
  }
`;
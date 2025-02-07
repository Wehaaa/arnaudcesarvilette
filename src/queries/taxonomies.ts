
export const GET_CATEGORIES = `
  query GetCategories {
    categories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

export const GET_RESOURCE_CATEGORIES = `
  query GetResourceCategories {
    resourceCategories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

export const GET_TAGS = `
 query GetTags {
   tags {
     nodes {
       id
       name
       slug
       count
     }
   }
 }
`;

export const GET_EVENT_CATEGORIES = `
 query GetEventCategories {
   eventCategories {
     nodes {
       id
       name
       slug
       count
     }
   }
 }
`;

export const queryWorks = `
query GetWorks($first: Int = 6, $after: String, $category: String) {
  works(
    first: $first
    after: $after
    where: {
      taxQuery: {
        relation: AND
        taxArray: [
          {
            terms: [$category]
            taxonomy: WORKCATEGORY
            operator: IN
            field: SLUG
          }
        ]
      }
    }
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      databaseId
      title
      mainTitle
      subtitle
      workCategories {
        nodes {
          name
          slug
        }
      }
      gallery {
        id
        caption
        sizes {
          full {
            url
            width
            height
          }
          mediumLarge {
            url
            width
            height
          }
        }
      }
    }
  }
}
`
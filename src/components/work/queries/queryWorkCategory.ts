
export const queryWorkCategory = `
query GetWorkCategories( $category: ID! ) {
  workCategory(id: $category, idType: SLUG) {
    databaseId
    name
    slug
    description
    count
    uri
  }
}
`




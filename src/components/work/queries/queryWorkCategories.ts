
export const queryWorkCategories = `
query GetWorkCategories {
  workCategories(where: {hideEmpty: false}) {
    nodes {
      id
      name
      slug
      description
      count
      coverImage {
        url
        width
        height
      }
    }
  }
}
`


import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { GET_LANDING } from '@/queries/landing'

export async function getLandingData(slug: string, isPreview: boolean) {
  try {
    return await fetchGraphQL(GET_LANDING, {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    })
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de la page : ${error}`)
  }
}
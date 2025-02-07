// Retirer le 'use client' puisque c'est côté serveur

import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { GET_POST } from '@/queries/post'
import { PostContentNode } from '@/types/post'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

interface PostResponse {
  contentNode: PostContentNode
}

// Fonction pour récupérer les données
async function getPostData(slug: string, isPreview: boolean): Promise<PostResponse> {
  try {
    const data = await fetchGraphQL(GET_POST, {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    })
    return data
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de l'article: ${error}`)
  }
}

export default async function PostBody({ 
  slug, 
  isPreview = false 
}: { 
  slug: string
  isPreview?: boolean 
}) {
  try {
    const data = await getPostData(slug, isPreview)

    if (!data?.contentNode) {
      return <div>Article non trouvé</div>
    }

    return (
      <article className="space-y-6">
        <PostHeader post={data.contentNode} />
        <PostContent post={data.contentNode} />
        <PostFooter post={data.contentNode} />
      </article>
    )
  } catch (error) {
    return <div>Erreur : {error instanceof Error ? error.message : 'Une erreur est survenue'}</div>
  }
}
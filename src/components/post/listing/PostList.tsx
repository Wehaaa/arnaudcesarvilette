import { PostItem } from "@/components/post/listing/PostItem";
import LoadingPostList from "@/components/post/loading/LoadingPostList";
import { Post } from "@/types/post";

interface PostListProps {
  posts?: Post[];
  isLoading?: boolean;
  appendMode?: boolean;
  className?: string;
}

const PostList = ({ posts = [], isLoading = false, appendMode = false, className = "" }: PostListProps) => {
  if (isLoading && !appendMode) {
    return <LoadingPostList />;
  }

  if (!isLoading && !posts.length) {
    return (
      <div className="">
        <p className="text-gray-500">Aucun résultat trouvé.</p>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} className={className} />
      ))}
      {isLoading && appendMode && (
        <LoadingPostList itemCount={3} />
      )}
    </>
  );
};

export default PostList;
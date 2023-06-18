import { getPostsMeta } from "@/lib/vectorposts";
import VectorItem from "./VectorItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="text-center mt-10">Sorry no vectors available.</p>;
  }

  return (
    <section
      id="illustrations"
      className="max-w-screen-xl  px-4 py-32 mx-auto sm:px-6 sm:py-20 lg:px-8"
    >
      <header className="text-center">
        <h2 className="text-xl font-bold text-black/90 sm:text-3xl">
          Recent V4Vector Illustrations
        </h2>
        <p className="max-w-md mx-auto mt-4 text-black/80">
          This is a selection of the most recent requests made using V4Vector.
          Give it a try or check out some of the requests others have submitted.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 mt-20 lg:grid-cols-3">
        {posts.map((post) => (
          <VectorItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

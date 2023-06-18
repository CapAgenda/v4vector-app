import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/vectorposts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import Image from "next/image";
import { gitHubRawUrl } from "@/lib/gitHubRawUrl";

export const revalidate = 10;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Vector Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <section className="w-full max-w-xl mx-auto ">
        <Link href="/" className="block mt-10">
          <h3 className="mt-20 text-lg text-center mb-0 font-bold text-black/90 sm:text-xl">
            {meta.title}
          </h3>
          <p className="text-center">{pubDate}</p>
          <Image
            src={gitHubRawUrl + meta.featureimage}
            alt={meta.title}
            width={5000}
            height={5000}
            className="w-full px-8 object-cover "
          />
        </Link>
        <p className="font-bold pt-8 mb-2 text-center">
          Return Value to the Artist:{" "}
        </p>
        <div className="mb-8 flex items-center">
          <span className="inline-flex items-center mx-auto -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
            <Link
              href={meta.stripe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-black/90 hover:bg-gray-50 focus:relative"
            >
              Debit/Credit
            </Link>

            <Link
              href={meta.paypal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-black/90 hover:bg-gray-50 focus:relative"
            >
              PayPal
            </Link>

            <Link
              href={meta.lightning}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-black/90 hover:bg-gray-50 focus:relative"
            >
              Bitcoin Lightning
            </Link>
          </span>
        </div>
        <p className="font-bold mb-2 text-center">Illustration Files:</p>
        <div className="flex  mb-8 justify-center">
          <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
            <Link
              href={meta.svgfile}
              download
              className="inline-block px-4 py-2 text-sm font-medium text-black/90 hover:bg-gray-50 focus:relative"
            >
              (.SVG) File
            </Link>

            <Link
              href={gitHubRawUrl + meta.featureimage}
              download
              className="inline-block px-4 py-2 text-sm font-medium text-black/90 hover:bg-gray-50 focus:relative"
            >
              (.PNG) File
            </Link>
          </span>
        </div>

        <article className="mt-2 text-black/90 mx-auto px-8 py-4 bg-black/5 shadow-lg">
          {content}
          <div className=" py-4 font-light text-center mx-auto">
            <h3 className="">Topics:</h3>
            <div className="flex justify-center font-normal flex-row gap-4">
              {tags}
            </div>
          </div>
        </article>
      </section>
      <div className="flex w-full justify-center mt-4 py-4 bg-black/5">
        {" "}
        <Link href="/" className=" text-center text-sm">
          ← Back to home
        </Link>
      </div>
    </>
  );
}

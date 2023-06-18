import { compileMDX } from "next-mdx-remote/rsc";
import Video from "@/app/components/VectorPosts/Video";
import CustomImage from "@/app/components/VectorPosts/CustomImage";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  fileName: string
): Promise<VectorPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/capagenda/vectorposts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    featureimage: string;
    stripe: string;
    paypal: string;
    lightning: string;
    svgfile: string;
    tags: string[];
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const vectorPostObj: VectorPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      featureimage: frontmatter.featureimage,
      stripe: frontmatter.stripe,
      paypal: frontmatter.paypal,
      lightning: frontmatter.lightning,
      svgfile: frontmatter.svgfile,
      tags: frontmatter.tags,
    },
    content,
  };

  return vectorPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/capagenda/vectorposts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const vectorPosts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      vectorPosts.push(meta);
    }
  }

  return vectorPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

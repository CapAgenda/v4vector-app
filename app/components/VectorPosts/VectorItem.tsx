import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import PreviewImage from "./PreviewImage";

type Props = {
  post: Meta;
};

export default function VectorItem({ post }: Props) {
  const { id, title, featureimage, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li>
      <Link
        className="group rounded-lg block shadow-xl"
        href={`/vectors/${id}`}
      >
        <PreviewImage src={featureimage} alt={title} />
        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className="text-black/90 font-bold group-hover:underline group-hover:underline-offset-4 pl-2">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-black/90 text-xs pb-2 pl-2">{formattedDate}</p>
      </Link>
    </li>
  );
}

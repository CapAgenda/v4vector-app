"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

const initState = {
  title: "",
  description: "",
  email: "",
};

export default function VectorRequest() {
  const [data, setData] = useState(initState);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(data));

    const { title, description, email } = data;

    // Send data to API route
    const res = await fetch("http://localhost:3000/api/user-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        email,
      }),
    });

    const result = await res.json();
    console.log(result);

    // Navigate to thank you
    router.push(`/thankyou/`);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  const content = (
    <div
      id="vectorrequest"
      className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8 bg-white"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Request an illustration
        </h2>

        <p className="mt-4 text-gray-500">
          Request captivating illustrations and be inspired by the magic of
          creativity. Our skilled artists bring your concepts to life through
          our unique karma algorithm. Join our supportive community and
          contribute value for exceptional artworks.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label className="sr-only" htmlFor="title">
            Vector Artwork Request Title:
          </label>
          <div className="relative">
            <input
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xl focus:ring-black hover:ring-black"
              type="text"
              id="title"
              name="title"
              placeholder="Choose a Title For Your Artwork"
              value={data.title}
              onChange={handleChange}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="description">
            Description:
          </label>
          <div className="relative">
            <textarea
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xl focus:ring-black hover:ring-black"
              id="description"
              name="description"
              placeholder="Provide additional details about your request here..."
              rows={5}
              cols={33}
              value={data.description}
              onChange={handleChange}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="email">
            Email:
          </label>
          <div className="relative">
            <input
              className="w-full shadow-xl rounded-lg border-gray-200 p-4 pe-12 text-sm focus:ring-black hover:ring-black"
              type="email"
              id="email"
              name="email"
              placeholder="Your@Email.com"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={data.email}
              onChange={handleChange}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="inline-block  font-bold rounded-xl border border-black/0 p-8 shadow-xl transition hover:border-white/10 hover:shadow-white/10 hover:border-black focus:outline-none focus:ring focus:ring-white"
            disabled={!canSave}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  return content;
}

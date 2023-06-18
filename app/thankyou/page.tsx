import Link from "next/link";

export default function ThankYou() {
  return (
    <section className="rounded-3xl shadow-2xl">
      <div className="p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-black/90">
          Your request is on the way
        </p>

        <h2 className="mt-6 text-3xl font-bold">
          Thanks for your request, may karma smile upon you!
        </h2>

        <Link
          className="mt-8 inline-block w-full rounded-full bg-black/90 py-4 text-sm font-bold text-white shadow-xl"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

const Errorpage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="text-center mb-4">Something went Wrong! Try Again</h3>
        <Link href="/">
          <button className="btn btn-accent  mx-auto">
            Back to the homepage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Errorpage;

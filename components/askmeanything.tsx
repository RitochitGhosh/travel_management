export default function AskmeAnything() {
  return (
    <>
      <div>
        <div className="w-[400px] h-full rounded-lg shadow-lg p-8 bg-white">
          {" "}
          <h1 className="text-2xl font-title font-bold text-black mb-6">
            Submit your Review
          </h1>
          <div className="mb-4">
            <textarea
              id="question"
              className="w-full h-[270px] p-3 border border-neutral-300 rounded-md text-neutral-950 focus:outline-none focus:border-primary-500"
              placeholder="Share your experience here..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center mt-3 ">
            <button className="bg-blue-600 font-bold w-1/2 rounded-md text-primary-50 py-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

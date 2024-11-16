export default function FAQ() {
  return (
    <>
      <div>
        <div className=" min-h-[400px] p-6  rounded-lg">
          <h1 className="font-title mb-6 xl:mb-16 mt-20 xl:mt-3 text-4xl font-bold flex justify-center">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            <details className="bg-gradient-to-b from-blue-200 to-blue-100 p-4 rounded-md">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="font-medium">
                  How do I cancel or modify my booking?
                </span>
                <span className="font-semibold text-lg">+</span>
              </summary>
              <p className="mt-2">
                You can cancel or modify your booking up to 48 hours before
                departure through your account dashboard. Cancellation policies
                vary by provider.
              </p>
            </details>

            <details className="bg-gradient-to-b from-blue-200 to-blue-100 p-4 rounded-md">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="font-medium">Are the prices shown final?</span>
                <span className="font-semibold text-lg">+</span>
              </summary>
              <p className="mt-2">
                Yes, all prices include taxes and fees. There are no hidden
                charges.
              </p>
            </details>

            <details className="bg-gradient-to-b from-blue-200 to-blue-100 p-4 rounded-md">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="font-medium">
                  How do I compare different packages?
                </span>
                <span className="font-semibold text-lg">+</span>
              </summary>
              <p className="mt-2">
                Use our comparison tool to select up to 4 packages side-by-side.
                You can compare prices, inclusions, itineraries, and reviews.
              </p>
            </details>
            <details className="bg-gradient-to-b from-blue-200 to-blue-100 p-4 rounded-md">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="font-medium">
                  Is my payment information secure?
                </span>
                <span className="font-semibold text-lg">+</span>
              </summary>
              <p className="mt-2">
                Yes, we use bank-grade encryption for all transactions and never
                store your complete card information.
              </p>
            </details>
            <details className="bg-gradient-to-b from-blue-200 to-blue-100 p-4 rounded-md">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="font-medium">
                  What happens if a provider cancels my package?
                </span>
                <span className="font-semibold text-lg">+</span>
              </summary>
              <p className="mt-2">
                We provide a full refund and assist you in finding alternative
                options. Our 24/7 support team will guide you through the
                process.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}

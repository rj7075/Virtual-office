const Plans = ({ plans }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose a Virtual Office based on your needs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600"
            >
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start mb-2">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                Explore Workspaces
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Looking for a customised solution?
          </h3>
          <p className="mb-6">Connect with our experts now.</p>
          <div className="flex justify-center">
            <ul className="mb-6 list-disc list-inside space-y-2 text-left">
              <li>Permanent signage</li>
              <li>Fixed Seat</li>
              <li>Day Pass</li>
              <li>Meeting Room hours</li>
            </ul>
          </div>

          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Request Callback
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;

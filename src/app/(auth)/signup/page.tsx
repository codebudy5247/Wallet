import SignupForm from "@/components/SignupForm";

const page = () => {
  return (
    <section className="bg-blue-600 min-h-screen">
      <div className="container mx-auto px-6 py-6 h-full flex justify-center items-center">
        <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default page;

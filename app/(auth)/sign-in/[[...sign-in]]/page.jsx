import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 w-full h-full">
        {/* Image Section */}
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Background Image"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
            layout="fill"
          />
        </aside>

        {/* Form Section */}
        <main
          className="flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            {/* Logo positioned to the left */}
            <div className="flex items-center">
              <Image
                src="/logo.svg" // Replace with the path to your uploaded logo
                alt="Logo"
                width={50} // Adjust width
                height={50} // Adjust height
                className="h-8 sm:h-10"
              />
              <h1 className="ml-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to GenNex Learn
              </h1>
            </div>

            {/* Sign In Form */}
            <div className="mt-8">
              <SignIn />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const Purchase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePurchase = () => {
    if (email && password) {
      toast.success("Congratulation! You Purchases Sikho Sobai Course");
    }
  };
  return (
    <div className="w-4/6 mx-auto">
      <div
        className="
				flex
				justify-center
				items-center
				2xl:container 2xl:mx-auto
				lg:py-16
				md:py-12
				py-9
				px-4
				md:px-6
				lg:px-20
				xl:px-44
			"
      >
        <div
          className="
					flex
					w-full
					sm:w-9/12
					lg:w-full
					flex-col
					lg:flex-row
					justify-center
					items-center
					lg:space-x-10
					2xl:space-x-36
					space-y-12
					lg:space-y-0
				"
        >
          <div className="flex w-full flex-col justify-start items-start">
            <div className="">
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Check out
              </p>
            </div>

            <div className="mt-12 flex flex-col justify-start items-start w-full space-y-8">
              <input
                onBlur={(e) => setEmail(e.target.value)}
                className="
								focus:ring-2 focus:ring-gray-500 focus:outline-none
								px-2
								border-b border-gray-200
								leading-4
								text-base
								placeholder-gray-600
								py-4
								w-full
							"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                onBlur={(e) => setPassword(e.target.value)}
                className="
								focus:ring-2 focus:ring-gray-500 focus:outline-none
								px-2
								border-b border-gray-200
								leading-4
								text-base
								placeholder-gray-600
								py-4
								w-full
							"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              onClick={handlePurchase}
              className="
							mt-8
							text-base
							font-medium
							focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
							hover:bg-black
							leading-4
							py-4
							w-full
							md:w-4/12
							lg:w-full
							text-white
							bg-gray-800
						"
            >
              Purchase
            </button>
          </div>

          {/* <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  20
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $2790
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $90
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Sub total</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $3520
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Purchase;

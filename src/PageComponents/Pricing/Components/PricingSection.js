import React from "react";

export default function PricingSection() {
  const data = [
    {
      title: "Free equity delivery",
      descreption:
        "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
      price: "0",
    },
    {
      title: "Intraday and F&O trades",
      descreption:
        "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
      price: "20",
    },
    {
      title: "Free direct MF",
      descreption:
        "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
      noteText: "Get It Done Right And Fast",
      price: "0",
    },
  ];
  return (
    <section className="custom-container custom-container-padding">
      <div className="pb-6">
        <h2 className="text-center font-extrabold">Brokerage Charges</h2>
        <h6 className="text-gray-500 text-center">
          List of all charges and taxes
        </h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2.5 md:p-5 bg-white rounded-[10px]">
        {/* Basic Plan */}
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-[10px] md:gap-[20px] p-[10px]`}
            >
              <h3 className="font-bold text-center text-primary flex flex-row items-start justify-center">
                ₹
                <span className="text-7xl md:text-7xl lg:text-8xl font-extrabold">
                  {item.price}
                </span>
              </h3>
              <div className="space-y-[5px] md:space-y-[10px]">
                <h4 className="text-center">{item.title}</h4>
                <p className="text-gray-600 text-center">{item.descreption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

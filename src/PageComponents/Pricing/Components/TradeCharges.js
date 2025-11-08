"use client";

import React, { useEffect, useState } from "react";

const TradeCharges = () => {
  const tabs = [
    { label: "Equity", value: "equity" },
    { label: "Currency", value: "currency" },
    { label: "Commodity", value: "commodity" },
  ];
  const tableContents = {
    equity: {
      headers: [
        "",
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      data: [
        {
          chargeType: "Brokerage",
          rate: {
            "Equity delivery": "Zero Brokerage",
            "Equity intraday":
              "0.03% or ₹20 per executed order whichever is lower",
            "F&O - Futures":
              "0.03% or ₹20 per executed order whichever is lower",
            "F&O - Options": "Flat ₹20 per executed order",
          },
        },
        {
          chargeType: "STT/CTT",
          rate: {
            "Equity delivery": "0.1% on buy & sell",
            "Equity intraday": "0.025% on the sell side",
            "F&O - Futures": "0.02% on the sell side",
            "F&O - Options": [
              "0.125% of the intrinsic value on options that are bought and exercised",
              "0.1% on sell side (on premium)",
            ],
          },
        },
        {
          chargeType: "Transaction charges",
          rate: {
            "Equity delivery": "NSE: 0.00297%, BSE: 0.00375%",
            "Equity intraday": "NSE: 0.00297%, BSE: 0.00375%",
            "F&O - Futures": "NSE: 0.00173%, BSE: 0%",
            "F&O - Options":
              "NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)",
          },
        },
        {
          chargeType: "GST",
          rate: {
            "Equity delivery":
              "18% on (brokerage + SEBI charges + transaction charges)",
            "Equity intraday":
              "18% on (brokerage + SEBI charges + transaction charges)",
            "F&O - Futures":
              "18% on (brokerage + SEBI charges + transaction charges)",
            "F&O - Options":
              "18% on (brokerage + SEBI charges + transaction charges)",
          },
        },
        {
          chargeType: "SEBI charges",
          rate: {
            "Equity delivery": "₹10 / crore",
            "Equity intraday": "₹10 / crore",
            "F&O - Futures": "₹10 / crore",
            "F&O - Options": "₹10 / crore",
          },
        },
        {
          chargeType: "Stamp charges",
          rate: {
            "Equity delivery": "0.015% or ₹1500 / crore on buy side",
            "Equity intraday": "0.003% or ₹300 / crore on buy side",
            "F&O - Futures": "0.002% or ₹200 / crore on buy side",
            "F&O - Options": "0.003% or ₹300 / crore on buy side",
          },
        },
      ],
    },
    currency: {
      // first header for the chargeType column, then the currency columns
      headers: ["", "Currency futures", "Currency options"],
      data: [
        {
          chargeType: "Brokerage",
          rate: {
            "Currency futures":
              "0.03% or ₹20 per executed order whichever is lower",
            "Currency options": "₹20 per executed order",
          },
        },
        {
          chargeType: "STT/CTT",
          rate: {
            "Currency futures": "No STT",
            "Currency options": "No STT",
          },
        },
        {
          chargeType: "Transaction charges",
          rate: {
            "Currency futures": "NSE: 0.00035%, BSE: 0.00045%",
            "Currency options": "NSE: 0.0311%, BSE: 0.001%",
          },
        },
        {
          chargeType: "GST",
          rate: {
            "Currency futures":
              "18% on (brokerage + SEBI charges + transaction charges)",
            "Currency options":
              "18% on (brokerage + SEBI charges + transaction charges)",
          },
        },
        {
          chargeType: "SEBI charges",
          rate: {
            "Currency futures": "₹10 / crore",
            "Currency options": "₹10 / crore",
          },
        },
        {
          chargeType: "Stamp charges",
          rate: {
            "Currency futures": "0.0001% or ₹10 / crore on buy side",
            "Currency options": "0.0001% or ₹10 / crore on buy side",
          },
        },
      ],
    },
    commodity: {
      headers: ["", "Commodity futures", "Commodity options"],
      data: [
        {
          chargeType: "Brokerage",
          rate: {
            "Commodity futures":
              "0.03% or ₹20 per executed order whichever is lower",
            "Commodity options": "₹20 per executed order",
          },
        },
        {
          chargeType: "STT/CTT",
          rate: {
            "Commodity futures": "0.01% on sell side (Non-Agri)",
            "Commodity options": "0.05% on sell side",
          },
        },
        {
          chargeType: "Transaction charges",
          rate: {
            "Commodity futures": "MCX: 0.0021%, NSE: 0.0001%",
            "Commodity options": "MCX: 0.0418%, NSE: 0.001%",
          },
        },
        {
          chargeType: "GST",
          rate: {
            "Commodity futures":
              "18% on (brokerage + SEBI charges + transaction charges)",
            "Commodity options":
              "18% on (brokerage + SEBI charges + transaction charges)",
          },
        },
        {
          chargeType: "SEBI charges",
          rate: {
            "Commodity futures": "Agri: ₹1 / crore, Non-agri: ₹10 / crore",
            "Commodity options": "₹10 / crore",
          },
        },
        {
          chargeType: "Stamp charges",
          rate: {
            "Commodity futures": "0.002% or ₹200 / crore on buy side",
            "Commodity options": "0.003% or ₹300 / crore on buy side",
          },
        },
      ],
    },
  };

  const accountOpeningCharges = {
    headers: ["Type of account", "Charges"],
    data: [
      {
        typeOfAccount: "Online account",
        charges: "Free",
      },
      {
        typeOfAccount: "Offline account",
        charges: "Free",
      },
      {
        typeOfAccount: "NRI account (offline only)",
        charges: "₹500",
      },
      {
        typeOfAccount:
          "Partnership, LLP, HUF, or Corporate accounts (offline only)",
        charges: "₹500",
      },
    ],
  };

  const dematAmcCharges = {
    headers: ["Value of holdings", "AMC"],
    data: [
      {
        valueOfHoldings: "Up to ₹4 lakh",
        amc: "Free",
      },
      {
        valueOfHoldings: "₹4 lakh - ₹10 lakh",
        amc: "₹ 100 per year, charged quarterly*",
      },
      {
        valueOfHoldings: "Above ₹10 lakh",
        amc: "₹ 300 per year, charged quarterly",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("equity");

  // Handle tab change on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const tab = tabs.find((tab) => tab.value === hash);
      if (tab) {
        setActiveTab(tab.value);
      }
    };

    // Check hash on initial mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section>
      <div className="custom-container custom-container-padding flex flex-col gap-4 md:gap-[30px]">
        {/* Trade Charges */}
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-bold">Trade Charges</h4>
          {/* Tabs  */}
          <div className="flex gap-2 md:gap-4 select-none overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <h5
                key={tab.value}
                href={`#${tab.value}`}
                className={`py-2 px-3 md:px-4 cursor-pointer hover:text-primary whitespace-nowrap text-sm md:text-base ${
                  activeTab === tab.value
                    ? "text-primary border-b-2 border-primary"
                    : "border-b-2 border-transparent"
                } transition-all font-medium`}
                onClick={() => {
                  window.location.hash = tab.value;
                }}
              >
                {tab.label}
              </h5>
            ))}
          </div>
          {/*  Table Content */}
          <div className="overflow-x-auto scrollbar-hide p-[12px] border-2 border-primary/10 rounded-[10px]">
            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-[800px]">
              <thead>
                <tr>
                  {tableContents[activeTab].headers.map((header, index) => (
                    <th
                      key={index}
                      className="border-b-2 border-gray-300 py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm lg:text-base font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableContents[activeTab].data.map((item, index) => (
                  <tr key={index} className="hover:bg-primary/10">
                    <td className="border-b border-gray-200 py-2 md:py-3 px-2 md:px-4 font-medium text-xs md:text-sm lg:text-base">
                      {item.chargeType}
                    </td>

                    {/* If rate is an object (multi-column), render each value into its own td */}
                    {typeof item.rate === "object" &&
                    !Array.isArray(item.rate) ? (
                      Object.values(item.rate).map((value, i) => (
                        <td
                          key={i}
                          className="border-b border-gray-200 py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm"
                        >
                          {Array.isArray(value) ? (
                            <ul className="list-disc list-inside space-y-1">
                              {value.map((subItem, j) => (
                                <li key={j} className="text-xs md:text-sm">
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            value
                          )}
                        </td>
                      ))
                    ) : (
                      // Single-column rate: span remaining header columns
                      <td
                        className="border-b border-gray-200 py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm"
                        colSpan={tableContents[activeTab].headers.length - 1}
                      >
                        {Array.isArray(item.rate) ? (
                          <ul className="list-disc list-inside space-y-1">
                            {item.rate.map((subItem, j) => (
                              <li key={j} className="text-xs md:text-sm">
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          item.rate
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charges for account opening */}
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-bold">Account Opening Charges</h4>
          <div className="overflow-x-auto scrollbar-hide p-[12px] border-2 border-primary/10 rounded-[10px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {accountOpeningCharges.headers.map((header, index) => (
                    <th
                      key={index}
                      className="border-b-2 border-gray-300 py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm lg:text-base font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {accountOpeningCharges.data.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-200 py-2 md:py-3 px-2 md:px-4 font-medium text-xs md:text-sm lg:text-base">
                      {item.typeOfAccount}
                    </td>
                    <td
                      className={`border-b border-gray-200 py-2 md:py-3 px-2 md:px-4 font-medium text-xs md:text-sm lg:text-base`}
                    >
                      <span
                        className={`${
                          item.charges.toLowerCase() === "free"
                            ? "bg-green-500 px-1 py-0.5 text-white"
                            : ""
                        } font-bold`}
                      >
                        {item.charges}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Demat AMC (Annual Maintenance Charge) */}
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-bold">Demat AMC (Annual Maintenance Charge)</h4>
          <div className="overflow-x-auto scrollbar-hide p-[12px] border-2 border-primary/10 rounded-[10px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {dematAmcCharges.headers.map((header, index) => (
                    <th
                      key={index}
                      className="border-b-2 border-gray-300 py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm lg:text-base font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dematAmcCharges.data.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b border-gray-200 py-2 md:py-3 px-2 md:px-4 font-medium text-xs md:text-sm lg:text-base">
                      {item.valueOfHoldings}
                    </td>
                    <td
                      className={`border-b border-gray-200 py-2 md:py-3 px-2 md:px-4 font-medium text-xs md:text-sm lg:text-base`}
                    >
                      <span
                        className={`${
                          item.amc.toLowerCase() === "free"
                            ? "bg-green-500 px-1 py-0.5 text-white"
                            : ""
                        }`}
                      >
                        {item.amc}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeCharges;

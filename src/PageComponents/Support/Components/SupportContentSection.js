import { Search } from "lucide-react";
import React from "react";

const SupportContentSection = () => {
  return (
    <section>
      <div className="custom-container custom-container-padding">
        {/* Top Queries section */}
        <div>
            <div className="flex flex-row items-center justify-between">
                <h2 className="hero-h1-gradiant">Top Support Queries</h2>
                <button className="primary-button">My Queries</button>
            </div>
            <div className="w-full flex items-center justify-between p-[20x] border-2 border-gray-400">
                <input placeholder="Search Queries" className="outline-none w-full" />
                <button className="primary-button"><Search /></button>
            </div>
        </div>

        {/* Bottom Support section */}
        <div className="flex flex-row">
            {/* Quick links & card  */}
            <div></div>
            {/* Support FAQs  */}
            <div></div>
        </div>
      </div>
    </section>
  );
};

export default SupportContentSection;

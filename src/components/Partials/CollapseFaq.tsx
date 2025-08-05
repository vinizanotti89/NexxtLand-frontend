"use client";
import React, { useState } from "react";
import Icon from "../Adapters/Icon";

interface CollapseProps {
  content: React.ReactNode;
  title: React.ReactNode;
}

const CollapseFaq: React.FC<CollapseProps> = ({ content, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="">
      <button
        onClick={handleToggleCollapse}
        className="flex w-full items-center gap-2 border-[1px] border-[#c2c2c2] p-4 rounded-lg group"
      >
        <div
          translate="no"
          className="flex-1 font-bold text-white group-hover:text-brand-yellow-100 transition duration-700 ease-in-out text-center sm:text-start"
        >
          {title}
        </div>
        {isCollapsed ? (
          <Icon
            icon="eva:arrow-down-fill"
            rotate={4}
            className="text-3xl text-white"
          />
        ) : (
          <Icon
            icon="eva:arrow-down-fill"
            rotate={2}
            className="text-3xl text-white"
          />
        )}
      </button>

      <div
        className={`overflow-hidden transition-max-height ease-in-out duration-300 ${
          isCollapsed ? "max-h-0" : "max-h-96"
        }`}
      >
        <div
          className="p-4 text-center text-white sm:text-start montserrat-thin"
          translate="no"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default CollapseFaq;

import React from "react";

interface SectionProps {
  title: string;
  number: string;
  children: React.ReactNode;
  isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  number,
  children,
  isLast = false,
}) => (
  <section className={`py-6 ${!isLast ? "border-b border-gray-300" : ""}`}>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
      <div className="md:col-span-1">
        <h2 className="text-sm font-bold tracking-widest uppercase text-gray-600">
          {number} {title}
        </h2>
      </div>
      <div className="md:col-span-3 text-sm text-gray-700">{children}</div>
    </div>
  </section>
);

export default Section;

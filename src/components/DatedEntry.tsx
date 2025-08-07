import React from "react";

interface DatedEntryProps {
  date: string;
  children: React.ReactNode;
}

const DatedEntry: React.FC<DatedEntryProps> = ({ date, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
    <div className="md:col-span-1 text-gray-600">{date}</div>
    <div className="md:col-span-3">{children}</div>
  </div>
);

export default DatedEntry;

import React from 'react';

export default function Callout({ title = 'Astuces', children }) {
  return (
    <div className="mt-6 p-4 rounded-xl border bg-[#faf7ef] border-l-4 border-l-[#ad9d64]">
      <p className="text-[#ad9d64] font-semibold mb-1">{title}</p>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}


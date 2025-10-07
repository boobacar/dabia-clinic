import React, { useEffect, useState } from 'react';

export default function ReviewsChips() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/google-reviews')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);
  if (!data || !data.reviews || data.reviews.length === 0) return null;
  return (
    <div className="py-6 overflow-x-auto">
      <div className="flex gap-3 min-w-full">
        {data.reviews.slice(0, 8).map((rv, i) => (
          <div key={i} className="shrink-0 border rounded-full px-4 py-2 bg-white shadow-sm text-sm text-gray-700">
            <span className="text-[#bb2988] mr-1">★ {rv.rating}</span>
            <span className="opacity-80">{rv.text.slice(0, 70)}…</span>
          </div>
        ))}
      </div>
    </div>
  );
}


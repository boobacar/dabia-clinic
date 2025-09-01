import React from "react";

export const ShareButtons = ({ title, url }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <a
        className="px-3 py-2 rounded-full border hover:bg-gray-50"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        Partager Facebook
      </a>
      <a
        className="px-3 py-2 rounded-full border hover:bg-gray-50"
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noreferrer"
      >
        Partager X/Twitter
      </a>
      <a
        className="px-3 py-2 rounded-full border hover:bg-gray-50"
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="px-3 py-2 rounded-full border hover:bg-gray-50"
      >
        Copier le lien
      </button>
    </div>
  );
};

import Image from "next/image";
import React from "react";

const Trusted = () => {
  return (
    <div className="flex items-center justify-center gap-8 mb-12">
      <div className="flex -space-x-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-10 h-10 overflow-hidden flex items-center justify-center rounded-full"
          >
            <Image
              src={`/users/user${i}.jpg`}
              alt="User"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
      <div className="text-left">
        <div className="text-white font-semibold">Trusted by creators</div>
        <div className="flex flex-col gap-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-4 w-4 fill-current text-yellow-500"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-zinc-400 text-sm ml-1">5.0 (100+ reviews)</div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;

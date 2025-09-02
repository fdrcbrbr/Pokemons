"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";


export default function Search({ placeholder }: { placeholder?: string }) {
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  
  const handleChange = useDebouncedCallback((queryString: string) => {
    
    const params = new URLSearchParams(searchParams);
    if (queryString) {
      params.set("query", queryString);
    } else {
      params.delete("query");
    }
    
    replace(`${pathname}?${params}`, { scroll: false });
  }, 600);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <label className="sr-only" htmlFor="search">
        {placeholder ?? "Search"}
      </label>
      <input
        className="w-full pl-8 my-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        id="search"
        placeholder={placeholder ?? "Search..."}
        
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        
        defaultValue={searchParams.get("query")?.toString()}
      />
      <SearchIcon className="absolute my-12 inset-y-0 right-0 flex items-center pr-3 pointer-events-none" />
    </div>
  );
}
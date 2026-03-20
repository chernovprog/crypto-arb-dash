import { useEffect, useRef, useState } from "react";

import axios from "axios";

interface CryptoOption {
  id: string;
  label: string;
  thumb: string;
}

export const useCryptoSearch = () => {
  const abortControllerRef = useRef<AbortController | null>(null);

  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<CryptoOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue.trim().length < 2) {
      setOptions([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const timer = setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(inputValue)}`,
          { signal: abortControllerRef.current?.signal }
        );
        const coins = response.data.coins.map((coin: any) => ({
          id: coin.id,
          label: `${coin.name} (${coin.symbol.toUpperCase()})`,
          thumb: coin.thumb,
        }));
        setOptions(coins);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Search API error:", error);
          setOptions([]);
        }
      } finally {
        setLoading(false);
        abortControllerRef.current = null;
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return { inputValue, setInputValue, options, loading };
};

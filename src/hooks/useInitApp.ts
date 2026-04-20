import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { APP_INIT_METADATA_SECTIONS } from "@/api/endpoints";
import { fetchMetadata } from '@/api/services/metadataService';
import { useAppMetadataStore } from '@/store/useAppMetadataStore';

export const useInitApp = () => {
  const setMetadata = useAppMetadataStore((state) => state.setMetadata);

  const query = useQuery({
    queryKey: ['initialMetadata'],
    queryFn: () => fetchMetadata(APP_INIT_METADATA_SECTIONS),
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });

  useEffect(() => {
    if (query.data) {
      setMetadata(query.data);
    }
  }, [query.data, setMetadata]);

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
};

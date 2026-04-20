import { publicApi } from "@/api/client";
import { API_PARAMS, API_ROUTES, type MetadataSection } from "@/api/endpoints";

export const fetchMetadata = async (sections: MetadataSection[]) => {
  const { data } = await publicApi.get(API_ROUTES.SYSTEM.METADATA, {
    params: { [API_PARAMS.SECTIONS]: sections.join(',') }
  });
  return data;
};

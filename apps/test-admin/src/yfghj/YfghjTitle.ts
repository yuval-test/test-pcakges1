import { Yfghj as TYfghj } from "../api/yfghj/Yfghj";

export const YFGHJ_TITLE_FIELD = "id";

export const YfghjTitle = (record: TYfghj): string => {
  return record.id?.toString() || String(record.id);
};

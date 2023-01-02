export interface Request {
  headers?: Record<string, string> | Headers | Map<string, string>;
}

export type CookieDecode = (value: string) => string;

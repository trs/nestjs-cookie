import { parse } from 'cookie';

import { COOKIE_HEADER } from './cookies.const';

import type { Request, CookieDecode } from './cookies.interface';

export const getCookies = (
  request: Request,
  decode?: CookieDecode
): Map<string, string> => {
  const headers =
    request.headers instanceof Map
      ? Object.fromEntries(request.headers.entries())
      : request.headers instanceof Headers
      ? Object.fromEntries(request.headers.entries())
      : request.headers ?? {};

  return new Map(
    Object.entries(parse(headers[COOKIE_HEADER] ?? '', { decode }))
  );
};

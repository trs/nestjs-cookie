import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import type { Request, CookieDecode } from './cookies.interface';
import { getCookies } from './cookies.util';

export const Cookies = (decode?: CookieDecode) =>
  createParamDecorator((ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    const cookies = getCookies(request, decode);

    return cookies;
  });

export const Cookie = (name: string, decode?: CookieDecode) =>
  createParamDecorator((ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    const cookies = getCookies(request, decode);

    return cookies.get(name);
  });

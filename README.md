# NestJS Cookie

> Read cookies using decorators in NestJS

## Install

```sh
npm install nestjs-cookie
# or
yarn add nestjs-cookie
```

## Usage

Use the `@Cookie` decorator to grab a cookie from the `cookie` header.

```ts
import { Controller } from '@nestjs/common';
import { Cookie } from 'nestjs-cookie';

@Controller()
export class MyController {
  @Get()
  async myMethod(@Cookie('some_token') token: string) {
    console.log(token);
  }
}
```

You can also grab a `Map` of all cookies using the `@Cookies` decorator

```ts
import { Controller } from '@nestjs/common';
import { Cookies } from 'nestjs-cookie';

@Controller()
export class MyController {
  @Get()
  async myMethod(@Cookies() cookies: Map<string, string>) {
    console.log(cookies);
  }
}
```

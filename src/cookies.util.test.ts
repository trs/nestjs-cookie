import { getCookies } from './cookies.util';

describe('getCookies', () => {
  it('should support an object as headers', () => {
    const request = {
      headers: {
        cookie: 'a=av',
      },
    };

    const cookies = getCookies(request);
    expect(cookies).toEqual(new Map([['a', 'av']]));
  });

  it('should support the Map class as headers', () => {
    const request = {
      headers: new Map([['cookie', 'a=av']]),
    };

    const cookies = getCookies(request);
    expect(cookies).toEqual(new Map([['a', 'av']]));
  });

  it('should support the Headers class as headers', () => {
    const request = {
      headers: new Headers([['cookie', 'a=av']]),
    };

    const cookies = getCookies(request);
    expect(cookies).toEqual(new Map([['a', 'av']]));
  });

  it('should return empty map if no cookie header is given', () => {
    const request = {
      headers: {},
    };

    const cookies = getCookies(request);
    expect(cookies).toEqual(new Map());
  });
});

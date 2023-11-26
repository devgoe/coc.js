[![npm version](https://badge.fury.io/js/@devgoe%2Fcoc.js.svg)](https://badge.fury.io/js/@devgoe%2Fcoc.js)

# coc.js

## Description

This pakage is created out of the swagger description of the COC API. To use it you need a token.

## Installation

```ts
import { Api } from "@devgoe/coc.js";
const client = new Api({
  baseApiParams: {
    headers: {
      Authorization: `Bearer ${process.env.COC_TOKEN}`,
    },
  },
});
```

Use the `process.env.COC_TOKEN` to store your token in your .env File

After the initial creation of the API you can use all features listed on the coc API description.
This package also supports TypeScript

For example you can search for Clans using the .clans syntax

```ts
client.clans
  .searchClans({
    name: "example",
    limit: 10,
  })
  .then((res) =>
    res.data.items.forEach((clan) => {
      console.log(clan.name);
    })
  );
```

```ts
const clans = await client.clans.searchClans({
  name: "example",
  limit: 10,
});
```

### Roadmap

Next steps i want to implement:

- [ ] Bring the Token as variable

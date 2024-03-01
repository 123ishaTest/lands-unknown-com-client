# Lands Unknown Client

> A TypeScript client to integrate with the lands-unknown server into your (my) games!

## Usage

```bash
npm install @123ishatest/lands-unknown-com-client
```

```ts
import { LuClient } from '@/LuClient.ts';
import { UserToken } from '@/model/UserToken.ts';
import { Info } from '@/model/Info.ts';

const baseUrl = 'https://lands-unknown.com/api';
const gameId = '1eed8153-30c5-60e2-a1a1-05ba7dc241ce';

// Create a client for this specific game
const client = new LuClient(baseUrl, gameId);

// Login the user, store the token locally to avoid having to log in again
const userToken: UserToken = await client.login('Isha', 'Password');

// Get all information for this user and game
const info: Info = await client.getInfo();

// Gain an achievement
await client.gainAchievement('achievement-slug');
```

### Create from a GitHub template

Add the [top of this page on GitHub](https://github.com/123ishaTest/ts-library-template) there should be a large green button that says `Use This Template`.
Click that to use this template!

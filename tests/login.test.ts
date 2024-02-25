import { test } from 'vitest';
import { LuClient } from '@/LuClient.ts';

const client = new LuClient('https://lands-unknown.com/api', '1eed3eef-845e-6f6a-aee4-69879fa58e6a');

test('subtracts 4 from 5 to equal 1', async () => {
  const x = await client.login('isha', '');
  console.log(x);
  await client.gainAchievement('test');

  const info = await client.getInfo();
  console.log(info);
});

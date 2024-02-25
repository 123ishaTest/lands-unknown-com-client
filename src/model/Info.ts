import { UserData } from '@/model/UserData.ts';
import { GameData } from '@/model/GameData.ts';

export interface Info {
  user: UserData;
  game: GameData;
}

import { UserData } from '@/model/UserData.ts';
import { GameData } from '@/model/GameData.ts';
import { UserAchievement } from '@/model/UserAchievement.ts';

export interface Info {
  achievements: UserAchievement[];
  owner: UserData;
  game: GameData;
}

import { GameAchievement } from '@/model/GameAchievement.ts';

export interface GameData {
  name: string;
  gameId: string;
  achievements: GameAchievement[];
}

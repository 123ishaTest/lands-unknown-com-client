import { GameAchievement } from '@/model/GameAchievement.ts';

export interface GameData {
  title: string;
  gameId: string;
  achievements: GameAchievement[];
}

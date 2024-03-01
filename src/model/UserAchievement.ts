import { GameAchievement } from '@/model/GameAchievement.ts';

export interface UserAchievement {
  timestamp: string;
  achievement: GameAchievement;
}

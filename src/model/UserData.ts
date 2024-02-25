import { GameAchievement } from '@/model/GameAchievement.ts';

export interface UserData {
  username: string;
  email: string;
  achievements: GameAchievement[];
  achievementScore: number;
}

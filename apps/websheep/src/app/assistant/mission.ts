import { Topic } from './topic';

export interface MissionConfig {
  apiBasePath: string;
  includeCredentials?: boolean;
}

export interface Mission {
  id: string;
  title: string;
  topic: Topic;
  goals?: string[];
  hints?: string[];
  config: MissionConfig;
}

export function createMission(mission: Mission): Mission {
  return {
    ...mission,
    goals: [],
    hints: [],
    config: {
      /* Default configuration is without including credentials. */
      includeCredentials: false,
      ...mission.config
    }
  };
}

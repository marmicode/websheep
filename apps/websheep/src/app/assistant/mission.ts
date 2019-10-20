import { Topic } from './topic';

export interface MissionConfig {
  apiBasePath: string;
}

export interface Mission {
  title: string;
  topic: Topic;
  goals?: string[];
  hints?: string[];
  config: MissionConfig;
}

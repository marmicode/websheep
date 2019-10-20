import { Topic } from './topic';

export interface MissionConfig {
  apiBasePath: string;
}

export interface Mission {
  id: string;
  title: string;
  topic: Topic;
  goals?: string[];
  hints?: string[];
  config: MissionConfig;
}

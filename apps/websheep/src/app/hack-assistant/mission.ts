import { Topic } from './topic';

export interface Mission {
  title: string;
  topic: Topic;
  goals?: string[];
  hints?: string[];
  // @todo config: Config
}

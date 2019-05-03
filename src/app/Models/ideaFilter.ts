import {Idea} from './idea';

export interface IdeaFilter {
  id: string;
  filterTitle: string;
  filterDescription: string;
  ideas: Array<Idea>;
}

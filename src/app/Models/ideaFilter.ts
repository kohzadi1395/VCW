import {Filter} from './filter';
import {Idea} from './idea';

export interface IdeaFilter {
  idea: Idea;
  filters: Array<Filter>;
}

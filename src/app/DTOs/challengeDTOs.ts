import {Person} from '../Models/person';
import {Idea} from '../Models/idea';
import {Filter} from '../Models/filter';

export interface ChallengeGetDTO {
  id: string;
  title: string;
  description: string;
  deadline: string;
  firstBounce: string;
  secondBounce: string;
  thirdBounce: string;
  companyName: string;
  challengeType: boolean;
  challengeState: number;
  invitePerson: Array<Person>;
  ideas: Array<Idea>;
  filters: Array<Filter>;
}


export interface ChallengePostDTO {
  id: string;
  title: string;
  description: string;
  deadline: string;
  firstBounce: string;
  secondBounce: string;
  thirdBounce: string;
  companyName: string;
  challengeType: boolean;
  challengeState: number;
  invitePersonId: Array<string>;
}

export class ChallengePostIdeaDTO {
  id: string;
  Ideas: Array<Idea>;
}

export class ChallengePostFilterDTO {
  id: string;
  filters: Array<Filter>;
}

export class ChallengeSelectionIdeaDTO {
  challengeId: string;
  kill: Array<Idea>;
  keep: Array<Idea>;
  review: Array<Idea>;
  multiply: Array<Idea>;
}

export class ChallengeSelectionFilterDTO {
  challengeId: string;
  kill: Array<Filter>;
  keep: Array<Filter>;
  review: Array<Filter>;
  multiply: Array<Filter>;
}

export class ChallengeGetVcfDTO {
  challengeId: string;
  filterPasseds: Array<FilterPassed>;
}

export class FilterPassed {
  filter: Filter;
  ideas: Array<Idea>;
}

export class ChallengePostVcfDTO {
  challengeId: string;
  VcfResultDTOs: Array<VcfResultDTO>;
}

export class VcfResultDTO {
  filterId: string;
  ideaId: string;
  isPassed: boolean;
}


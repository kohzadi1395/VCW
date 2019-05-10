import {Person} from '../Models/person';
import {Idea} from '../Models/idea';
import {Filter} from "../Models/filter";

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

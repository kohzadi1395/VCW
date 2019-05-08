import {Person} from '../Models/person';

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


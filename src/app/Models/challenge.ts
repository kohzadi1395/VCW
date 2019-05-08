import {Person} from './person';

export interface Challenge {
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

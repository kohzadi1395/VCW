export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  image: string;
  company: string;
}

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

}

export interface GridRowData {
  columnNameClicked: string;
  columnData: Challenge;
}

// export interface Track {
//   title: string;
//   id: string;
//   tasks: Task[];
// }
//
// export interface Task {
//   title: string;
//   description: string;
//   id: string;
// }

import { Injectable } from "@angular/core";

export interface Respondent {
  submissionId: string;
  memberId: string;
  name: string;
  status: number;
  respondedDate: string;
  questionId: string;
  questionText: string;
  value: string;
}

let employees: Respondent[] = [
  {
    submissionId: "287232a4-5aec-4a59-8e70-deabbe424fcb",
    memberId: "358789ed-1926-4520-84c7-a752f951ab04",
    name: "Demo Tom",
    status: 2,
    respondedDate: "2018-08-24T09:08:00Z",
    questionId: "question1",
    questionText: "Height of mount Everest ",
    value: "226m",
    label: null
  },
  {
    submissionId: "9cd43881-7f66-4131-b2b9-15d321110530",
    memberId: "68933382-e6e1-4f94-abd0-cf495dc1b969",
    name: "Demo Bob",
    status: 2,
    respondedDate: "2018-08-24T09:10:26Z",
    questionId: "question1",
    questionText: "Height of mount Everest ",
    value: "222m",
    label: null
  },
  {
    submissionId: null,
    memberId: "87f90b1f-7a6a-4952-88dd-7691c81352a8",
    name: "Demo Alice",
    status: 0,
    respondedDate: "2018-08-24T09:10:26Z",
    questionId: "question1",
    questionText: "Height of mount Everest ",
    value: "221m",
    label: null
  },
  {
    submissionId: null,
    memberId: "e2f74b0e-21b2-470e-8d4d-f1c8abc6dc1a",
    name: "Demo Martin",
    status: 0,
    respondedDate: "2018-08-24T09:10:26Z",
    questionId: "question1",
    questionText: "Height of mount Everest ",
    value: "227m",
    label: null
  },
  {
    submissionId: "287232a4-5aec-4a59-8e70-deabbe424fcb",
    memberId: "358789ed-1926-4520-84c7-a752f951ab04",
    name: "Demo Tom",
    status: 2,
    respondedDate: "2018-08-24T09:08:00Z",
    questionId: "question2",
    questionText: "Depth of Mariana trench",
    value: "401m",
    label: null
  },
  {
    submissionId: "9cd43881-7f66-4131-b2b9-15d321110530",
    memberId: "68933382-e6e1-4f94-abd0-cf495dc1b969",
    name: "Demo Bob",
    status: 2,
    respondedDate: "2018-08-24T09:10:26Z",
    questionId: "question2",
    questionText: "Depth of Mariana trench",
    value: "402m",
    label: null
  },
  {
    submissionId: null,
    memberId: "87f90b1f-7a6a-4952-88dd-7691c81352a8",
    name: "Demo Alice",
    status: 0,
    respondedDate: "2018-08-24T09:10:26Z",
    questionId: "question2",
    questionText: "Depth of Mariana trench",
    value: "409m",
    label: null
  },
  {
    submissionId: null,
    memberId: "e2f74b0e-21b2-470e-8d4d-f1c8abc6dc1a",
    name: "Demo Martin",
    status: 0,
    respondedDate: "2018-08-24T09:10:26Z",
    questionId: "question2",
    questionText: "Depth of Mariana trench",
    value: "401m",
    label: null
  }
];

@Injectable()
export class Service {
  getEmployees(): Respondent[] {
    return employees;
  }
}

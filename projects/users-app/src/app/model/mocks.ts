import { IUser } from "./user";

export const USER_DATA: IUser[] = [{
  firstName: "bill",
  lastName: "gates",
  dob: new Date("Dec 21, 1965"),
  income: 500,
  isWorking: true,
  company: "Microsoft",
  votes: 120,
  image: "assets/images/bill.jpg"
},{
  firstName: "steve",
  lastName: "jobs",
  dob: new Date("Jan 1, 1965"),
  income: 0,
  isWorking: false,
  company: "Apple",
  votes: 180,
  image: "assets/images/steve.jpg"
},{
  firstName: "tim b.",
  lastName: "lee",
  dob: new Date("Aug 1, 1965"),
  income: 200,
  isWorking: true,
  company: "World Wide Web",
  votes: 125,
  image: "assets/images/tim.jpg"
}]

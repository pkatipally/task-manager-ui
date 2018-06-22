export class TaskInfoModel{
  public id: number;
  public taskName: string;
  public taskDescription: string;
  public email: string;
  public contact: number;
  constructor(id:number, taskName: string, taskDescription: string, email: string, contact: number){
    this.taskName = taskName;
    this.id = id;
    this.taskDescription = taskDescription;
    this.email = email;
    this.contact = contact;
  }

}

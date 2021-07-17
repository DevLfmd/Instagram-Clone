export class User {
  private login: string;
  private password: string;
  
  public constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  };
};
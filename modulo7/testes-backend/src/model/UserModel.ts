export interface User { 
  id: string,
  name: string,
  email: string,
  password: string,
  role:string
}

export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
};
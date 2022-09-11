import { Role } from "./role.model";

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;

  firstName: string;
  lastName: string;
  phone: string;
  socials: string[];

  onCreate: Date;
  onUpdate: Date;
  isActive: boolean;
  role: Role;
}
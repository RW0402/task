export interface User {
  name: string;
  age: number;
  email?: string;
}

export interface UserTable {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

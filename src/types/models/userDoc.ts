export interface UserDoc1 {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  birthday: string;
  isActive: boolean;
  description: string;
  lastAccess: {
    mac: string;
    ip: string;
    userAgent: string;
  };
}

export interface UserDoc0 {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  birthday: string;
  isActive: boolean;
}

export interface UserDoc {
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

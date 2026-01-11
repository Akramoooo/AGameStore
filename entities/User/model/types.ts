export interface UserProfile {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  avatar: string | null;
  role: UserRole;
}

export type UserRole = "user" | "admin";

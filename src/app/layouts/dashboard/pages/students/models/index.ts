export type UserRole = 'admin' | 'user';

export interface IStudent {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    approved: boolean;
    role: UserRole; 
    createdAt: Date;
}
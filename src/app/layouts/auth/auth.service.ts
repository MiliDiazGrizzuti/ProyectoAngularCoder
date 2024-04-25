import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IStudent } from "../dashboard/pages/students/models";

@Injectable({
    providedIn: "root",
})

export class AuthService {

    authUser$ = new BehaviorSubject<IStudent | null>(null);

    private isAuthenticated: boolean = false;

    constructor() {}
        
    login(): void {
        this.authUser$.next({
            id: 1,
            firstName: "Rick",
            lastName: "Grimes",
            email: "rick.grimes@hotmail.com",
            age: 48,
            gender: "Masculino",
            approved: true,
            role: "admin",
            createdAt: new Date()
        });
        this.isAuthenticated = true;
    }

    logout(): void {
        this.authUser$.next(null);
        this.isAuthenticated = false;
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
      }

}
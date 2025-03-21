import { Injectable } from "@angular/core";

@Injectable()
export class SignService {
    signToSystem: boolean = false;
    isUserLoggedToSystem: boolean = false;

    login: string = '';
    password: string = '';
    alert: string = '';

    sign(isSign: boolean) {
        this.signToSystem = isSign;
    }
}
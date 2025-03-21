import { Injectable } from "@angular/core";

@Injectable()
export class SignService {
    private _signToSystem: boolean = false;

    signGet() {
        return this._signToSystem;
    }

    sign(isSign: boolean) {
        this._signToSystem = isSign;
    }
}
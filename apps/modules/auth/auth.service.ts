import { AccountService } from '../accounts/accounts.service';
import { OtpService } from '../otp/otp.service';

export class AuthService {
    constructor(
        private readonly otp: OtpService,
        private readonly accounts: AccountService
    ) {}

    async validate() {}
    async signIn() {}
    async authenticate() {}
    async signOut() {}
}

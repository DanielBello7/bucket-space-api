import { DataSource } from 'typeorm';
import { OtpModule } from '../otp/otp.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountModule } from '../accounts/accounts.module';

export class AuthModule {
    static instance: AuthModule;
    public controller: AuthController;
    public service: AuthService;

    constructor(datasource: DataSource) {
        const otp = new OtpModule(datasource);
        const accounts = new AccountModule(datasource);
        this.service = new AuthService(otp.otpService, accounts.service);
        this.controller = new AuthController(this.service);
        if (AuthModule.instance) {
            return AuthModule.instance;
        } else {
            AuthModule.instance = this;
        }
    }
}

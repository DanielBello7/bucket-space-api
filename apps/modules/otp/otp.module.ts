import { DataSource, Repository } from 'typeorm';
import { OtpService } from './otp.service';
import { Otp } from './entities/otp.entity';

export class OtpModule {
    public otpService: OtpService;
    public repo: Repository<Otp>;

    constructor(datasource: DataSource) {
        this.repo = datasource.getRepository<Otp>(Otp);
        this.otpService = new OtpService(this.repo);
    }
}

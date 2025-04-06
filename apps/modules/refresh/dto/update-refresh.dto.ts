import { CreateRefreshDto } from "./create-refresh.dto";
export class UpdateRefreshDto implements Partial<CreateRefreshDto> {
	account?: string | undefined;
	refresh?: string | undefined;
}

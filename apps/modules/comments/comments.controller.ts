import { CommentService } from './comments.service';

export class CommentsController {
    constructor(private readonly comments: CommentService) {}
}

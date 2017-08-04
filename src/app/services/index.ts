import { HttpService } from './http.service';
import { UserService } from './user.service';
import {CookbookService} from "./cookbook.service";

export { HttpService } from './http.service';
export { UserService } from './user.service';

export const SERVICES = [
    HttpService,
    UserService,
    CookbookService,
]

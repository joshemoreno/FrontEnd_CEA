import { environment } from "src/environments/environment";

export class Access_token {
    grant_type: string = environment.grant_type;
    client_secret: string = environment.client_secret;
    client_id: string = environment.client_id;
    code: string;
    redirect_uri: string = environment.redirect_uri;
}

export class mettingWebesDto {
    subjectId:number;
    supportId:number;
    idWebEx?: string;
    classRoom?: string;
    mode:boolean;
    title:string;
    start_time: string;
    end_time: string;
}
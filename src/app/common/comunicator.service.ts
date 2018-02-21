import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export class ComunicatorService {

    private messagge$: Subject<string> = new Subject<string>();

    public sendMessage(message: string) {
        this.messagge$.next(message);
    }

    public receiveMessage(): Observable<string> {
        return this.messagge$;
    }
}
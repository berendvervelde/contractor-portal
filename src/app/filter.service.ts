import { Injectable } from '@angular/core'
import { Filter } from './filter'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    // behaviorsubject example service.
    // currently, this service is useless
    
    private defaultFilter: Filter = {
        finishDate: new Date(1601510400000),
        status: 1
    }

    private filterSubjectSource: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(this.defaultFilter)
    currentFilterSubject: Observable<Filter> = this.filterSubjectSource.asObservable()

    constructor() { }

    changeFilterSubject(filter: Filter) {
        this.filterSubjectSource.next(filter)
    }
}

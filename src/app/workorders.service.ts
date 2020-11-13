import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Workorder } from './workorder'
import { HttpClient } from '@angular/common/http'
import { Filter } from './filter'
import { WorkorderTableProperties } from './workorderTableProperties'

@Injectable({
    providedIn: 'root'
})
export class WorkordersService {
    private workordersUrl = 'api/workorders/';

    private filter: Filter = {
        finishDate: new Date(),
        status: 1
    }
    private workorderTableProperties: WorkorderTableProperties = {
        sortOrder: {
            direction: 'up',
            property: 'id'
        },
        page: 1,
        itemsPerPage: 50
    }

    constructor(
        private http: HttpClient
    ) { }

    getWorkorders(): Observable<Workorder[]> {
        //TODO: add filter and workorderTableProperties to request
        return this.http.get<Workorder[]>(this.workordersUrl)
    }

    setFilter(filter: Filter): void {
        this.filter = filter
    }

    getFilter(): Filter {
        return this.filter
    }

    setWorkorderTableProperties(workorderTableProperties: WorkorderTableProperties): void {
        this.workorderTableProperties = workorderTableProperties
    }

    getWorkorderTableProperties(): WorkorderTableProperties {
        return this.workorderTableProperties
    }
}

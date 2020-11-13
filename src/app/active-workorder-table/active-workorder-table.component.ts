import { Component, OnInit } from '@angular/core'
import { Workorder } from '../workorder'
import { WorkordersService } from '../workorders.service'
import { FilterService } from '../filter.service'
import { Filter } from '../filter'

@Component({
    selector: 'app-active-workorder-table',
    templateUrl: './active-workorder-table.component.html',
    styleUrls: ['./active-workorder-table.component.css']
})

export class ActiveWorkorderTableComponent implements OnInit {
    // tablecolumns order
    displayedColumns: string[] = ['description', 'finishDate', 'status']
    // table data
    dataSource: Workorder[]
    filter: Filter

    // inject service
    constructor(
        private workordersService: WorkordersService,
        private filterService: FilterService
    ) { }

    // subscribe to service to get the workorders
    getWorkorders(): void {
        this.workordersService.getWorkorders().subscribe(wos => this.dataSource = wos)
    }

    // subscribe to service to get the filter
    getFilter(): void {
        this.filterService.currentFilterSubject.subscribe(filter => {
            console.log(filter)
            this.filter = filter
        })
    }

    ngOnInit(): void {
        this.getWorkorders()
        this.getFilter()
    }
}

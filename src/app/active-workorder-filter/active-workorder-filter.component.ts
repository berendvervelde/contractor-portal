import { Component, OnInit } from '@angular/core'
import { FilterService } from '../filter.service'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'app-active-workorder-filter',
    templateUrl: './active-workorder-filter.component.html',
    styleUrls: ['./active-workorder-filter.component.css']
})
export class ActiveWorkorderFilterComponent implements OnInit {

    filterForm = new FormGroup({
        finishDate: new FormControl(new Date()),
        status: new FormControl('1')
    })

    constructor(
        private filterService: FilterService
    ) { }

    ngOnInit(): void {
    }

    updateFilter(): void {
        this.filterForm.value.status = Number(this.filterForm.value.status)
        this.filterService.changeFilterSubject(this.filterForm.value)
    }
}

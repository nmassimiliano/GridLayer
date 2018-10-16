import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { GridService } from '../../services/grid.service';
// Import Models
import { Grid } from '../../domain/grid-layer_db/grid';

// START - USED SERVICES
/**
* GridService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* GridService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Grid
 * @class GridListComponent
 */
@Component({
    selector: 'app-grid-list',
    templateUrl: './grid-list.component.html',
    styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
    list: Grid[];
    search: any = {};
    idSelected: string;
    constructor(
        private gridService: GridService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.gridService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Grid to remove
     *
     * @param {string} id Id of the Grid to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Grid
     */
    deleteItem() {
        this.gridService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}

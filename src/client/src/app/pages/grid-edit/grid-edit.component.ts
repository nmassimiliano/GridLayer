// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { GridService } from '../../services/grid.service';
// Import Models
import { Grid } from '../../domain/grid-layer_db/grid';

// START - USED SERVICES
/**
* GridService.create
*	@description CRUD ACTION create
*
* GridService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* GridService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* GridService.list
*	@description CRUD ACTION list
*
* GridService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Grid
 */
@Component({
    selector: 'app-grid-edit',
    templateUrl: 'grid-edit.component.html',
    styleUrls: ['grid-edit.component.css']
})
export class GridEditComponent implements OnInit {
    item: Grid;
    model: Grid;
    formValid: Boolean;

    constructor(
    private gridService: GridService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Grid();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.gridService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Grid
     *
     * @param {boolean} formValid Form validity check
     * @param Grid item Grid to save
     */
    save(formValid: boolean, item: Grid): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.gridService.update(item).subscribe(data => this.goBack());
            } else {
                this.gridService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}




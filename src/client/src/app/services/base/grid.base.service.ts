/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE gridBaseService PLEASE EDIT ../grid.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Grid } from '../../domain/grid-layer_db/grid';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Grid.service.ts
 */

/*
 * SCHEMA DB Grid
 *
	{
		grid_id: {
			type: 'Number',
			required : true,
			unique : true, 
		},
		grid_name: {
			type: 'String'
		},
		grid_port: {
			type: 'Number'
		},
		grid_trustkey: {
			type: 'String'
		},
		grid_uid: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class GridBaseService {

    contextUrl: string = environment.endpoint + '/grids';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * GridService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * GridService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Grid[]> {
        return this.http
            .get<Grid[]>(this.contextUrl)
            .pipe(map(data => data));
    }


    // Custom APIs

}
package com.gridlayer.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.gridlayer.db.gridlayer_db.service.GridService;
import com.gridlayer.db.gridlayer_db.entity.Grid;

//IMPORT RELATIONS

public class GridBaseController {
    
    @Autowired
	GridService gridService;



//CRUD METHODS

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/grids/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		gridService.delete(id);
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/grids", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Grid> getList() {
		return gridService.getList();
	}
	
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}

package com.gridlayer.db.gridlayer_db.service.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Service;

import com.gridlayer.db.gridlayer_db.entity.Grid;
import com.gridlayer.db.gridlayer_db.service.GridService;

//IMPORT RELATIONS

@Service
public class GridBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Grid insert(Grid obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `grid`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `grid` (`_id`, `grid_id`,`grid_name`,`grid_port`,`grid_trustkey`,`grid_uid`) VALUES (:id,:grid_id,:grid_name,:grid_port,:grid_trustkey,:grid_uid)";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("grid_id", obj.getGrid_id())
			.addValue("grid_name", obj.getGrid_name())
			.addValue("grid_port", obj.getGrid_port())
			.addValue("grid_trustkey", obj.getGrid_trustkey())
			.addValue("grid_uid", obj.getGrid_uid());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Grid` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - GET ONE
    	
	public Grid get(Long id) {
	    
		String sql = "select * from `Grid` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Grid) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Grid.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Grid> getList() {
	    
		String sql = "select * from `Grid`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Grid.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Grid update(Grid obj, Long id) {

		String sql = "UPDATE `Grid` SET `grid_id` = :grid_id,`grid_name` = :grid_name,`grid_port` = :grid_port,`grid_trustkey` = :grid_trustkey,`grid_uid` = :grid_uid  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("grid_id", obj.getGrid_id())
			.addValue("grid_name", obj.getGrid_name())
			.addValue("grid_port", obj.getGrid_port())
			.addValue("grid_trustkey", obj.getGrid_trustkey())
			.addValue("grid_uid", obj.getGrid_uid());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    


    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in GridService.java
     */
    

}

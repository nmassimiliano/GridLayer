package com.gridlayer.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.gridlayer.controller.base.GridBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/GridLayer.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class GridController extends GridBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}

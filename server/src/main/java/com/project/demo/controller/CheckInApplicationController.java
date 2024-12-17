package com.project.demo.controller;

import com.project.demo.entity.CheckInApplication;
import com.project.demo.service.CheckInApplicationService;
import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 入住申请：(CheckInApplication)表控制层
 *
 */
@RestController
@RequestMapping("/check_in_application")
public class CheckInApplicationController extends BaseController<CheckInApplication, CheckInApplicationService> {

    /**
     * 入住申请对象
     */
    @Autowired
    public CheckInApplicationController(CheckInApplicationService service) {
        setService(service);
    }


    @PostMapping("/add")
    @Transactional
    public Map<String, Object> add(HttpServletRequest request) throws IOException {
        Map<String,Object> paramMap = service.readBody(request.getReader());
        this.addMap(paramMap);
        return success(1);
    }

}

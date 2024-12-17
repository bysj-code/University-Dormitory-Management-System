package com.project.demo.controller;

import com.project.demo.entity.LeaveApplication;
import com.project.demo.service.LeaveApplicationService;
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
 * 请假申请：(LeaveApplication)表控制层
 *
 */
@RestController
@RequestMapping("/leave_application")
public class LeaveApplicationController extends BaseController<LeaveApplication, LeaveApplicationService> {

    /**
     * 请假申请对象
     */
    @Autowired
    public LeaveApplicationController(LeaveApplicationService service) {
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

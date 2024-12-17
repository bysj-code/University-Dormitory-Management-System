<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','student_no') || $check_field('add','student_no') || $check_field('set','student_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="学生学号" prop="student_no">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_student_no(form['student_no']) }}
							<!--<el-input id="business_name" v-model="form['student_no']" placeholder="请输入学生学号"-->
							<!--v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','student_no')) || (!form['health_reporting_id'] && $check_field('add','student_no'))" :disabled="disabledObj['student_no_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','student_no')">{{form['student_no']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','student_no')) || (!form['health_reporting_id'] && $check_field('add','student_no'))" id="student_no" v-model="form['student_no']" :disabled="disabledObj['student_no_isDisabled']">
								<el-option v-for="o in list_user_student_no" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','student_no')" id="student_no" v-model="form['student_no']" :disabled="true">
								<el-option v-for="o in list_user_student_no" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="student_no" v-model="form['student_no']" :disabled="disabledObj['student_no_isDisabled']">
							<el-option v-for="o in list_user_student_no" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','student_name') || $check_field('add','student_name') || $check_field('set','student_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="学生姓名" prop="student_name">
												<el-input id="student_name" v-model="form['student_name']" placeholder="请输入学生姓名"
							  v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','student_name')) || (!form['health_reporting_id'] && $check_field('add','student_name'))" :disabled="disabledObj['student_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','student_name')">{{form['student_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','instructor') || $check_field('add','instructor') || $check_field('set','instructor')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="辅导员" prop="instructor">
													<el-select v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','instructor')) || (!form['health_reporting_id'] && $check_field('add','instructor'))" id="instructor" v-model="form['instructor']" :disabled="disabledObj['instructor_isDisabled']">
							<el-option v-for="o in list_user_instructor" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','instructor')" id="instructor" v-model="form['instructor']" :disabled="true">
							<el-option v-for="o in list_user_instructor" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','reporting_date') || $check_field('add','reporting_date') || $check_field('set','reporting_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="上报日期" prop="reporting_date">
								<el-date-picker :disabled="disabledObj['reporting_date_isDisabled']" v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','reporting_date')) || (!form['health_reporting_id'] && $check_field('add','reporting_date'))" id="reporting_date"
						v-model="form['reporting_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','reporting_date')">{{form['reporting_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','temperature_today') || $check_field('add','temperature_today') || $check_field('set','temperature_today')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="今日体温" prop="temperature_today">
												<el-input id="temperature_today" v-model="form['temperature_today']" placeholder="请输入今日体温"
							  v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','temperature_today')) || (!form['health_reporting_id'] && $check_field('add','temperature_today'))" :disabled="disabledObj['temperature_today_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','temperature_today')">{{form['temperature_today']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','health_code') || $check_field('add','health_code') || $check_field('set','health_code')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="健康码" prop="health_code">
								<el-upload :disabled="disabledObj['health_code_isDisabled']" id="health_code" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_health_code"
						:show-file-list="false" v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','health_code')) || (!form['health_reporting_id'] && $check_field('add','health_code'))">
						<img v-if="form['health_code']" :src="$fullUrl(form['health_code'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','health_code')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['health_code'])" :preview-src-list="[$fullUrl(form['health_code'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','is_it_uncomfortable') || $check_field('add','is_it_uncomfortable') || $check_field('set','is_it_uncomfortable')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="是否不适" prop="is_it_uncomfortable">
								<el-select id="is_it_uncomfortable" v-model="form['is_it_uncomfortable']"
						v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','is_it_uncomfortable')) || (!form['health_reporting_id'] && $check_field('add','is_it_uncomfortable'))">
						<el-option v-for="o in list_is_it_uncomfortable" :key="o" :label="o" :value="o">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','is_it_uncomfortable')">{{form['is_it_uncomfortable']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','unwell_symptoms') || $check_field('add','unwell_symptoms') || $check_field('set','unwell_symptoms')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="不适症状" prop="unwell_symptoms">
								<el-input type="textarea" id="unwell_symptoms" v-model="form['unwell_symptoms']" placeholder="请输入不适症状"
						v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','unwell_symptoms')) || (!form['health_reporting_id'] && $check_field('add','unwell_symptoms'))" :disabled="disabledObj['unwell_symptoms_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','unwell_symptoms')">{{form['unwell_symptoms']}}</div>
							</el-form-item>
			</el-col>
					
	
	
	
	
	
	
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "health_reporting_id",
				url_add: "~/api/health_reporting/add?",
				url_set: "~/api/health_reporting/set?",
				url_get_obj: "~/api/health_reporting/get_obj?",
				url_upload: "~/api/health_reporting/upload?",

				query: {
					"health_reporting_id": 0,
				},

				form: {
								"student_no": 0, // 学生学号
										"student_name":  '', // 学生姓名
										"instructor": 0, // 辅导员
										"reporting_date":  '', // 上报日期
										"temperature_today":  '', // 今日体温
										"health_code":  '', // 健康码
										"is_it_uncomfortable":  '', // 是否不适
										"unwell_symptoms":  '', // 不适症状
											"health_reporting_id": 0, // ID
						
				},
				disabledObj:{
								"student_no_isDisabled": false,
										"student_name_isDisabled": false,
										"instructor_isDisabled": false,
										"reporting_date_isDisabled": false,
										"temperature_today_isDisabled": false,
										"health_code_isDisabled": false,
										"is_it_uncomfortable_isDisabled": false,
										"unwell_symptoms_isDisabled": false,
										},

	
					// 用户列表
				list_user_student_no: [],
						// 用户组
				group_user_student_no: "",
				
		
					// 用户列表
				list_user_instructor: [],
				
		
		
						// 是否不适选项列表
				list_is_it_uncomfortable: ['是','否'],
	
		
	
			}
		},
		methods: {


	
	
				/**
			 * 获取学生用户用户列表
			 */
			async get_list_user_student_no() {
                // if(this.user_group !== "管理员" && this.form["student_no"] === 0) {
                //     this.form["student_no"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=学生用户");
                if(json.result && json.result.list){
                    this.list_user_student_no = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取学生用户用户组
			 */
			async get_group_user_student_no() {
							this.form["student_no"] = this.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=学生用户");
				if(json.result && json.result.obj){
					this.group_user_student_no = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_student_no(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_student_no.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["student_no"] = id
									_this.disabledObj['student_no' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "student_no") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_student_no(id){
				var obj = this.list_user_student_no.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
				/**
			 * 获取辅导员用户列表
			 */
			async get_list_user_instructor() {
                // if(this.user_group !== "管理员" && this.form["instructor"] === 0) {
                //     this.form["instructor"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=辅导员");
                if(json.result && json.result.list){
                    this.list_user_instructor = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_instructor(id){
				var obj = this.list_user_instructor.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
						/**
			 * 上传健康码
			 * @param {Object} param 图片参数
			 */
			upload_health_code(param){
						this.uploadFile(param.file, "health_code");
					},
	
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
										
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
								        if (this.form["reporting_date"].indexOf("-")===-1){
          this.form["reporting_date"] = this.$toTime(parseInt(this.form["reporting_date"]),"yyyy-MM-dd")
        }
													$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


											        if(this.form["reporting_date"]=="0000-00-00"){
          this.form["reporting_date"] = null;
        }
				if(parseInt(this.form["reporting_date"]) > 9999){
					this.form["reporting_date"] = this.$toTime(parseInt(this.form["reporting_date"]),"yyyy-MM-dd")
				}
														


			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
				let msg = null
																														return msg;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/health_reporting/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/health_reporting/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/health_reporting/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/health_reporting/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/health_reporting/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
					this.get_list_user_student_no();
					this.get_group_user_student_no();
										this.get_list_user_instructor();
															},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>

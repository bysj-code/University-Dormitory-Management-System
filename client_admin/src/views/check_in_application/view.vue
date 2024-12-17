<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','student_no') || $check_field('add','student_no') || $check_field('set','student_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="学生学号" prop="student_no">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_student_no(form['student_no']) }}
							<!--<el-input id="business_name" v-model="form['student_no']" placeholder="请输入学生学号"-->
							<!--v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','student_no')) || (!form['check_in_application_id'] && $check_field('add','student_no'))" :disabled="disabledObj['student_no_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','student_no')">{{form['student_no']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','student_no')) || (!form['check_in_application_id'] && $check_field('add','student_no'))" id="student_no" v-model="form['student_no']" :disabled="disabledObj['student_no_isDisabled']">
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
							  v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','student_name')) || (!form['check_in_application_id'] && $check_field('add','student_name'))" :disabled="disabledObj['student_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','student_name')">{{form['student_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','instructor') || $check_field('add','instructor') || $check_field('set','instructor')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="辅导员" prop="instructor">
													<el-select v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','instructor')) || (!form['check_in_application_id'] && $check_field('add','instructor'))" id="instructor" v-model="form['instructor']" :disabled="disabledObj['instructor_isDisabled']">
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
								<el-col v-if="user_group === '管理员' || $check_field('get','building_name') || $check_field('add','building_name') || $check_field('set','building_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="楼栋名称" prop="building_name">
												<el-input id="building_name" v-model="form['building_name']" placeholder="请输入楼栋名称"
							  v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','building_name')) || (!form['check_in_application_id'] && $check_field('add','building_name'))" :disabled="disabledObj['building_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','building_name')">{{form['building_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','dormitory_room_number') || $check_field('add','dormitory_room_number') || $check_field('set','dormitory_room_number')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="宿舍房号" prop="dormitory_room_number">
												<el-input id="dormitory_room_number" v-model="form['dormitory_room_number']" placeholder="请输入宿舍房号"
							  v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','dormitory_room_number')) || (!form['check_in_application_id'] && $check_field('add','dormitory_room_number'))" :disabled="disabledObj['dormitory_room_number_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','dormitory_room_number')">{{form['dormitory_room_number']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','date_of_check_in') || $check_field('add','date_of_check_in') || $check_field('set','date_of_check_in')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="入住日期" prop="date_of_check_in">
								<el-date-picker :disabled="disabledObj['date_of_check_in_isDisabled']" v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','date_of_check_in')) || (!form['check_in_application_id'] && $check_field('add','date_of_check_in'))" id="date_of_check_in"
						v-model="form['date_of_check_in']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','date_of_check_in')">{{form['date_of_check_in']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','check_in_instructions') || $check_field('add','check_in_instructions') || $check_field('set','check_in_instructions')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="入住说明" prop="check_in_instructions">
								<el-input type="textarea" id="check_in_instructions" v-model="form['check_in_instructions']" placeholder="请输入入住说明"
						v-if="user_group === '管理员' || (form['check_in_application_id'] && $check_field('set','check_in_instructions')) || (!form['check_in_application_id'] && $check_field('add','check_in_instructions'))" :disabled="disabledObj['check_in_instructions_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','check_in_instructions')">{{form['check_in_instructions']}}</div>
							</el-form-item>
			</el-col>
							<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核状态" prop="examine_state">
					<el-select id="examine_state" v-model="form['examine_state']"
						v-if="user_group === '管理员' || (form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())">
						<el-option key="未审核" label="未审核" value="未审核"></el-option>
						<el-option key="已通过" label="已通过" value="已通过"></el-option>
						<el-option key="未通过" label="未通过" value="未通过"></el-option>
					</el-select>
					<div v-else>{{form["examine_state"]}}</div>
				</el-form-item>
			</el-col>
					<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核回复" prop="examine_reply">
					<el-input id="examine_reply" v-model="form['examine_reply']" placeholder="请输入审核回复"
						v-if="user_group === '管理员' || (form['examine_reply'] && $check_examine()) || (!form['examine_reply'] && $check_examine())"></el-input>
					<div v-else>{{form["examine_reply"]}}</div>
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
				field: "check_in_application_id",
				url_add: "~/api/check_in_application/add?",
				url_set: "~/api/check_in_application/set?",
				url_get_obj: "~/api/check_in_application/get_obj?",
				url_upload: "~/api/check_in_application/upload?",

				query: {
					"check_in_application_id": 0,
				},

				form: {
								"student_no": 0, // 学生学号
										"student_name":  '', // 学生姓名
										"instructor": 0, // 辅导员
										"building_name":  '', // 楼栋名称
										"dormitory_room_number":  '', // 宿舍房号
										"date_of_check_in":  '', // 入住日期
										"check_in_instructions":  '', // 入住说明
									"examine_state": "未审核",
							"examine_reply": "",
							"check_in_application_id": 0, // ID
						
				},
				disabledObj:{
								"student_no_isDisabled": false,
										"student_name_isDisabled": false,
										"instructor_isDisabled": false,
										"building_name_isDisabled": false,
										"dormitory_room_number_isDisabled": false,
										"date_of_check_in_isDisabled": false,
										"check_in_instructions_isDisabled": false,
										},

	
					// 用户列表
				list_user_student_no: [],
						// 用户组
				group_user_student_no: "",
				
		
					// 用户列表
				list_user_instructor: [],
				
		
		
		
	
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
												        if (this.form["date_of_check_in"].indexOf("-")===-1){
          this.form["date_of_check_in"] = this.$toTime(parseInt(this.form["date_of_check_in"]),"yyyy-MM-dd")
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


																	        if(this.form["date_of_check_in"]=="0000-00-00"){
          this.form["date_of_check_in"] = null;
        }
				if(parseInt(this.form["date_of_check_in"]) > 9999){
					this.form["date_of_check_in"] = this.$toTime(parseInt(this.form["date_of_check_in"]),"yyyy-MM-dd")
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
					bl = this.$check_action('/check_in_application/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/check_in_application/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/check_in_application/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/check_in_application/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/check_in_application/view','get');
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

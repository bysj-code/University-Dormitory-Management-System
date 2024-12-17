<template>
	<view class="diy_edit page_leave_application" id="leave_application_edit">
		<view class='warp'>
			<view class='container'>
				<view class='row'>
						<view v-if="$check_field('set','student_no') || $check_field('add','student_no') || $check_field('get','student_no')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								学生学号:
							</text>
						</view>
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_student_no"
									v-model="form['student_no']"
									:localdata="list_user_student_no"
									:clear="!disabledObj['student_no_isDisabled']"
									:disabled="disabledObj['student_no_isDisabled']"
									v-if="(form['student_no'] && $check_field('set','student_no')) || (!form['student_no'] && $check_field('add','student_no'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','student_no')">{{ form['student_no'] }}</text>
						</view>
					</view>
							<view v-if="$check_field('set','student_name') || $check_field('add','student_name') || $check_field('get','student_name')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								学生姓名:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_student_name" v-model="form['student_name']" placeholder="请输入学生姓名" v-if="(form['student_name'] && $check_field('set','student_name')) || (!form['student_name'] && $check_field('add','student_name'))" :disabled="disabledObj['student_name_isDisabled']" />
							<text v-else-if="$check_field('get','student_name')">{{ form['student_name'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','instructor') || $check_field('add','instructor') || $check_field('get','instructor')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								辅导员:
							</text>
						</view>
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_instructor"
									v-model="form['instructor']"
									:localdata="list_user_instructor"
									:clear="!disabledObj['instructor_isDisabled']"
									:disabled="disabledObj['instructor_isDisabled']"
									v-if="(form['instructor'] && $check_field('set','instructor')) || (!form['instructor'] && $check_field('add','instructor'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','instructor')">{{ form['instructor'] }}</text>
						</view>
					</view>
							<view v-if="$check_field('set','leave_type') || $check_field('add','leave_type') || $check_field('get','leave_type')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								请假类型:
							</text>
						</view>
								<!-- 选项 -->
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_leave_type"
									v-model="form['leave_type']"
									:localdata="list_leave_type"
									v-if="(form['leave_type'] && $check_field('set','leave_type')) || (!form['leave_type'] && $check_field('add','leave_type'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','leave_type')">{{ form['leave_type'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','start_time') || $check_field('add','start_time') || $check_field('get','start_time')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								开始时间:
							</text>
						</view>
								<!-- 日长 -->
						<view class="diy_field diy_datetime diy_text_row">
							<uni-datetime-picker :disabled="disabledObj['start_time_isDisabled']" type="datetime" id="form_start_time" v-model="form['start_time']" placeholder="请输入开始时间" v-if="(form['start_time'] && $check_field('set','start_time')) || (!form['start_time'] && $check_field('add','start_time'))" />
							<text v-else-if="$check_field('get','start_time')">{{ form['start_time'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','leave_days') || $check_field('add','leave_days') || $check_field('get','leave_days')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								请假天数:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_leave_days" v-model="form['leave_days']" placeholder="请输入请假天数" v-if="(form['leave_days'] && $check_field('set','leave_days')) || (!form['leave_days'] && $check_field('add','leave_days'))" :disabled="disabledObj['leave_days_isDisabled']" />
							<text v-else-if="$check_field('get','leave_days')">{{ form['leave_days'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','end_time') || $check_field('add','end_time') || $check_field('get','end_time')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								结束时间:
							</text>
						</view>
								<!-- 日长 -->
						<view class="diy_field diy_datetime diy_text_row">
							<uni-datetime-picker :disabled="disabledObj['end_time_isDisabled']" type="datetime" id="form_end_time" v-model="form['end_time']" placeholder="请输入结束时间" v-if="(form['end_time'] && $check_field('set','end_time')) || (!form['end_time'] && $check_field('add','end_time'))" />
							<text v-else-if="$check_field('get','end_time')">{{ form['end_time'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','reason_for_taking_leave') || $check_field('add','reason_for_taking_leave') || $check_field('get','reason_for_taking_leave')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								请假原因:
							</text>
						</view>
								<!-- 多文本 -->
						<view class="diy_field diy_desc diy_text_row">
							<textarea id="form_reason_for_taking_leave" v-model="form['reason_for_taking_leave']" v-if="(form['reason_for_taking_leave'] && $check_field('set','reason_for_taking_leave')) || (!form['reason_for_taking_leave'] && $check_field('add','reason_for_taking_leave'))" :disabled="disabledObj['reason_for_taking_leave_isDisabled']"/>
							<text v-else-if="$check_field('get','reason_for_taking_leave')">{{ form['reason_for_taking_leave'] }}</text>
						</view>
							</view>
						<view v-if="user_group === '管理员' || $check_examine()" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								审核状态:
							</text>
						</view>
						<view class="diy_field diy_text diy_text_row diy_select_flex">
							<uni-data-select
									v-model="form['examine_state']"
									:localdata="list_examine_state"
							></uni-data-select>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<text>
								{{ form['examine_state'] }}
							</text>
						</view>
					</view>
					<view v-if="user_group === '管理员' || $check_examine()" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								审核回复:
							</text>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<textarea v-model="form['examine_reply']">
							</textarea>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<text>
								{{ form['examine_reply'] }}
							</text>
						</view>
					</view>

				</view>
				<view class="row">
					<view class="col-12">
						<view class="btn_box">
							<button class="btn_submit primary_btn" @click="submit()">提交</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import mixin from "@/libs/mixins/page.js";
export default {
	mixins:[mixin],
	components:{},
	data(){
		return{
			url_get_obj:"~/api/leave_application/get_obj?",
			url_add:"~/api/leave_application/add?",
			url_set:"~/api/leave_application/set?",

			// 登录权限
			oauth: {
				"signIn": true,
				"user_group": []
			},

			// 查询条件
			query: {
					"student_no": 0,
						"student_name": "",
						"instructor": 0,
						"leave_type": "",
						"start_time": "",
						"leave_days": "",
						"end_time": "",
						"reason_for_taking_leave": "",
					"leave_application_id": 0
			},

			obj: {
					"student_no": 0, // 学生学号
						"student_name":  '', // 学生姓名
						"instructor": 0, // 辅导员
						"leave_type":  '', // 请假类型
						"start_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
						"leave_days":  '', // 请假天数
						"end_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
						"reason_for_taking_leave":  '', // 请假原因
					"examine_state": "未审核",
				"examine_reply": "",
				"leave_application_id": 0,

			},

			// 表单字段
			form: {
					"student_no": 0, // 学生学号
						"student_name":  '', // 学生姓名
						"instructor": 0, // 辅导员
						"leave_type":  '', // 请假类型
						"start_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
						"leave_days":  '', // 请假天数
						"end_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
						"reason_for_taking_leave":  '', // 请假原因
					"examine_state": "未审核",
				"examine_reply": "",
				"leave_application_id": 0,
			},
			disabledObj:{
					"student_no_isDisabled": false,
						"student_name_isDisabled": false,
						"instructor_isDisabled": false,
						"leave_type_isDisabled": false,
						"start_time_isDisabled": false,
						"leave_days_isDisabled": false,
						"end_time_isDisabled": false,
						"reason_for_taking_leave_isDisabled": false,
				},

					// 用户列表
			list_user_student_no: [],
								// 用户列表
			list_user_instructor: [],
					list_leave_type: [],
										
			field:"leave_application_id",
			table_key:"leave_application",

	list_examine_state:[{value:"未审核",text:"未审核"},{value:"已通过",text:"已通过"},{value:"未通过",text:"未通过"}],
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
				json.result.list.map((o) => this.list_user_student_no.push({value:o.user_id,text:o.nickname + '-' + o.username}));
			}
			else if(json.error){
				console.error(json.error);
			}
		},
				async get_user_session_student_no(){
			var _this = this;
			var json = await this.$get("~/api/user_group/get_obj?name=学生用户");
			if(json.result && json.result.obj){
				var source_table = json.result.obj.source_table;
				var user_id = _this.$store.state.user.user_id;
				if (user_id){
					var url = "~/api/"+source_table+"/get_obj?"
					this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
						if (res.result && res.result.obj) {
							var arr = []
							for (let key in res.result.obj) {
								arr.push(key)
							}
							var arrForm = []
							for (let key in _this.form) {
								arrForm.push(key)
							}
							_this.form["student_no"] = user_id
							_this.disabledObj['student_no' + '_isDisabled'] = true
							for (var i=0;i<arr.length;i++){
                if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                  for (var j = 0; j < arrForm.length; j++) {
                    if (arr[i] === arrForm[j]) {
                      if (arr[i] !== "student_no") {
                        _this.form[arrForm[j]] = res.result.obj[arr[i]]
                        _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                        break;
                      }
                    }
                  }
                }
							}
						}
					});
				}
			}
			else if(json.error){
				console.error(json.error);
			}
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
				json.result.list.map((o) => this.list_user_instructor.push({value:o.user_id,text:o.nickname + '-' + o.username}));
			}
			else if(json.error){
				console.error(json.error);
			}
		},
		
	
				/**
		 * 获取请假类型列表
		 */
		async get_list_leave_type() {
					['事假','病假','其他'].map((o) => this.list_leave_type.push({value:o,text:o}));
						},
			
	
				
	
				
	
				
	
				
	
			change_file(key_name){
			var _self = this;
				this.$chooseFile().then(res=>{
					console.log(res)

						const uploadTask = uni.uploadFile({
							url: _self.$fullUrl("/api/feedback/upload?"),
							filePath: res[0].path,
							name: "file",
							formData: {
								i_want_to_customize: "test",
							},
							header: {
								"x-auth-token": _self.$store.state.user.token,
							},
							success: function(uploadFileRes) {
								console.log(uploadFileRes)
								var filename = JSON.parse(uploadFileRes.data).result.url;
								_self.form[key_name] = filename;
							},
						});

						uploadTask.onProgressUpdate(function(res) {
							_self.percent = res.progress;
							console.log("上传进度" + res.progress);
							console.log("已经上传的数据长度" + res.totalBytesSent);
							console.log(
								"预期需要上传的数据总长度" + res.totalBytesExpectedToSend
							);
						});

				})
		},
		change_img(key_name) {
			var _self = this;
			_self.upload_img_flag = false
			// 选择图像方法
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					const tempFilePaths = res.tempFilePaths;
					const uploadTask = uni.uploadFile({
						url: _self.$fullUrl('/api/leave_application/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'leave_application': 'test'
						},
						header: {
							'x-auth-token': _self.$store.state.user.token
						},
						success: function(uploadFileRes) {
							var filename = JSON.parse(uploadFileRes.data).result.url
							var img_url = filename
							_self.form[key_name] = img_url
						}
					});

					uploadTask.onProgressUpdate(function(res) {
						_self.percent = res.progress;
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
					});
				},
				error: function(e) {
					console.log(e);
				}
			});
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_before(param){
			var form = uni.db.get("form");
			if (form) {
        delete(form.examine_state)
        delete(form.examine_reply)
				this.obj = uni.push(this.obj ,form);
				this.form = uni.push(this.form ,form);
			}
			var arr = []
			for (let key in form) {
				arr.push(key)
			}
			for (var i=0;i<arr.length;i++){
				this.disabledObj[arr[i] + '_isDisabled'] = true
			}
												if (this.form["start_time"] && JSON.stringify(this.form["start_time"]).indexOf("-")===-1) {
				this.form["start_time"] = this.$toTime(parseInt(this.form["start_time"]), "yyyy-MM-dd hh:mm:ss")
			}
								if (this.form["end_time"] && JSON.stringify(this.form["end_time"]).indexOf("-")===-1) {
				this.form["end_time"] = this.$toTime(parseInt(this.form["end_time"]), "yyyy-MM-dd hh:mm:ss")
			}
							uni.db.del("form");
			return param;
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_after(json ,func){
			var form = uni.db.get("form");
			var obj = Object.assign({} ,form ,this.obj);
			if (form) {
				this.obj = uni.push(this.obj ,obj);
			}
			if (form) {
				this.form = uni.push(this.form ,form);
			}
			if(func){
				func(json);
			}
		},

	},
	onLoad(){
				this.get_user_session_student_no();
				this.get_list_user_student_no();
									this.get_list_user_instructor();
				this.get_list_leave_type();
																},
}
</script>

<style scoped>
	input{
		font-size: 10px;
	}

	.form_edit {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
	}

	.left_text {
		flex: 0 0 25%;
		display: flex;
		align-items: center;
	}

	.right_text {
		flex: 0 0 75%;
		border-bottom: 1px solid #eee;
	}
	.right_text.btn_warp{
		border-bottom: 0;
	}

	.btn_submit {
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}

	.btn_submit:hover {
		opacity: 0.5;
	}
	.btn_add_img{
		color: #D3D3D3;
		text-align: center;
		border: 1px solid #eee;
		height: 5rem;
		width: 5rem;
		position: relative;
	}
	.btn_add_img text{
		font-size: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}




</style>
<style scoped>
/*新样式*/
.diy_text_row {
  display: inline-block;
}
.container {
	margin-top:1rem ;
	padding: 1rem;
    -webkit-box-shadow: 0px 0px 0px #888888;
    box-shadow: 0px 0px 0px #888888;
}
.primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
	.btn_submit{
		padding: 0;
		margin-top:1rem ;
	}
	.row-item {
		padding: 10px 10px;
	    background: #f8f6fc;
		margin-bottom: 1rem;
	}
	.diy_field{
		padding-left: 1rem;
	}
	.diy_title{
		align-items: center;
        font-size: 14px;
        color: #333;
	}

	.row-item{
		display: flex !important;
		align-items: baseline;
	}
	.diy_select_flex{
		flex: 1;
	}
	.query_select{
		flex: 1;
		border-color: rgb(229, 229, 229);
		background-color: rgb(255, 255, 255);
		border-radius: 4px;
		box-sizing: border-box;
		flex: 1;
		width: 100%;
		line-height: 2;
		font-size: 14px;
		height: 2.4em;
		min-height: 2.4em;
		display: block;
		outline:none;
	}
</style>


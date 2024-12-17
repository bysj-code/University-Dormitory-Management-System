<template>
	<view class="diy_edit page_health_reporting" id="health_reporting_edit">
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
							<view v-if="$check_field('set','reporting_date') || $check_field('add','reporting_date') || $check_field('get','reporting_date')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								上报日期:
							</text>
						</view>
								<!-- 日期 -->
						<view class="diy_field diy_date">
							<uni-datetime-picker :disabled="disabledObj['reporting_date_isDisabled']" type="date" id="form_reporting_date" v-model="form['reporting_date']" placeholder="请输入上报日期" v-if="(form['reporting_date'] && $check_field('set','reporting_date')) || (!form['reporting_date'] && $check_field('add','reporting_date'))" />
							<text v-else-if="$check_field('get','reporting_date')">{{ form['reporting_date'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','temperature_today') || $check_field('add','temperature_today') || $check_field('get','temperature_today')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								今日体温:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_temperature_today" v-model="form['temperature_today']" placeholder="请输入今日体温" v-if="(form['temperature_today'] && $check_field('set','temperature_today')) || (!form['temperature_today'] && $check_field('add','temperature_today'))" :disabled="disabledObj['temperature_today_isDisabled']" />
							<text v-else-if="$check_field('get','temperature_today')">{{ form['temperature_today'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','health_code') || $check_field('add','health_code') || $check_field('get','health_code')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								健康码:
							</text>
						</view>
								<!-- 图片 -->
						<!-- 修改权限 -->
						<view class="diy_field diy_img diy_text_row" v-if="form['health_code'] && $check_field('set','health_code')">
							<image v-if="disabledObj['health_code_isDisabled']" :src="$fullUrl(form['health_code'])" />
							<image v-if="!disabledObj['health_code_isDisabled']" :src="$fullUrl(form['health_code'])" @click="change_img('health_code')" />
						</view>
						<!-- 添加权限 -->
						<view class="diy_field diy_img diy_text_row" v-else-if="!form['health_code'] && $check_field('add','health_code')">
							<view v-if="disabledObj['health_code_isDisabled']" class="btn_add_img">
								<text>+</text>
							</view>
							<view v-if="!disabledObj['health_code_isDisabled']" class="btn_add_img diy_text_row" @click="change_img('health_code')">
								<text>+</text>
							</view>
						</view>
						<!-- 查询权限 -->
						<view class="diy_field diy_img diy_text_row" v-else-if="$check_field('get','health_code')">
							<image :src="$fullUrl(form['health_code'])" />
						</view>
						<uni-icons style="display: none;" class="forward" type="forward" id="form_img_health_code"></uni-icons>
							</view>
							<view v-if="$check_field('set','is_it_uncomfortable') || $check_field('add','is_it_uncomfortable') || $check_field('get','is_it_uncomfortable')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								是否不适:
							</text>
						</view>
								<!-- 选项 -->
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_is_it_uncomfortable"
									v-model="form['is_it_uncomfortable']"
									:localdata="list_is_it_uncomfortable"
									v-if="(form['is_it_uncomfortable'] && $check_field('set','is_it_uncomfortable')) || (!form['is_it_uncomfortable'] && $check_field('add','is_it_uncomfortable'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','is_it_uncomfortable')">{{ form['is_it_uncomfortable'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','unwell_symptoms') || $check_field('add','unwell_symptoms') || $check_field('get','unwell_symptoms')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								不适症状:
							</text>
						</view>
								<!-- 多文本 -->
						<view class="diy_field diy_desc diy_text_row">
							<textarea id="form_unwell_symptoms" v-model="form['unwell_symptoms']" v-if="(form['unwell_symptoms'] && $check_field('set','unwell_symptoms')) || (!form['unwell_symptoms'] && $check_field('add','unwell_symptoms'))" :disabled="disabledObj['unwell_symptoms_isDisabled']"/>
							<text v-else-if="$check_field('get','unwell_symptoms')">{{ form['unwell_symptoms'] }}</text>
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
			url_get_obj:"~/api/health_reporting/get_obj?",
			url_add:"~/api/health_reporting/add?",
			url_set:"~/api/health_reporting/set?",

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
						"reporting_date": "",
						"temperature_today": "",
						"health_code": "",
						"is_it_uncomfortable": "",
						"unwell_symptoms": "",
					"health_reporting_id": 0
			},

			obj: {
					"student_no": 0, // 学生学号
						"student_name":  '', // 学生姓名
						"instructor": 0, // 辅导员
						"reporting_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"temperature_today":  '', // 今日体温
						"health_code":  '', // 健康码
						"is_it_uncomfortable":  '', // 是否不适
						"unwell_symptoms":  '', // 不适症状
					"health_reporting_id": 0,

			},

			// 表单字段
			form: {
					"student_no": 0, // 学生学号
						"student_name":  '', // 学生姓名
						"instructor": 0, // 辅导员
						"reporting_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"temperature_today":  '', // 今日体温
						"health_code":  '', // 健康码
						"is_it_uncomfortable":  '', // 是否不适
						"unwell_symptoms":  '', // 不适症状
					"health_reporting_id": 0,
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
								// 用户列表
			list_user_instructor: [],
											list_is_it_uncomfortable: [],
				
			field:"health_reporting_id",
			table_key:"health_reporting",

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
		 * 获取是否不适列表
		 */
		async get_list_is_it_uncomfortable() {
					['是','否'].map((o) => this.list_is_it_uncomfortable.push({value:o,text:o}));
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
						url: _self.$fullUrl('/api/health_reporting/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'health_reporting': 'test'
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
											if (this.form["reporting_date"] && JSON.stringify(this.form["reporting_date"]).indexOf("-")===-1) {
				this.form["reporting_date"] = this.$toTime(parseInt(this.form["reporting_date"]), "yyyy-MM-dd")
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
													this.get_list_is_it_uncomfortable();
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


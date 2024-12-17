<template>
	<view class="diy_edit page_late_return_application" id="late_return_application_edit">
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
							<view v-if="$check_field('set','housemaster') || $check_field('add','housemaster') || $check_field('get','housemaster')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								宿管:
							</text>
						</view>
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_housemaster"
									v-model="form['housemaster']"
									:localdata="list_user_housemaster"
									:clear="!disabledObj['housemaster_isDisabled']"
									:disabled="disabledObj['housemaster_isDisabled']"
									v-if="(form['housemaster'] && $check_field('set','housemaster')) || (!form['housemaster'] && $check_field('add','housemaster'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','housemaster')">{{ form['housemaster'] }}</text>
						</view>
					</view>
							<view v-if="$check_field('set','dormitory_room_number') || $check_field('add','dormitory_room_number') || $check_field('get','dormitory_room_number')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								宿舍房号:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_dormitory_room_number" v-model="form['dormitory_room_number']" placeholder="请输入宿舍房号" v-if="(form['dormitory_room_number'] && $check_field('set','dormitory_room_number')) || (!form['dormitory_room_number'] && $check_field('add','dormitory_room_number'))" :disabled="disabledObj['dormitory_room_number_isDisabled']" />
							<text v-else-if="$check_field('get','dormitory_room_number')">{{ form['dormitory_room_number'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','late_return_time') || $check_field('add','late_return_time') || $check_field('get','late_return_time')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								晚归时间:
							</text>
						</view>
								<!-- 日长 -->
						<view class="diy_field diy_datetime diy_text_row">
							<uni-datetime-picker :disabled="disabledObj['late_return_time_isDisabled']" type="datetime" id="form_late_return_time" v-model="form['late_return_time']" placeholder="请输入晚归时间" v-if="(form['late_return_time'] && $check_field('set','late_return_time')) || (!form['late_return_time'] && $check_field('add','late_return_time'))" />
							<text v-else-if="$check_field('get','late_return_time')">{{ form['late_return_time'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','reasons_for_late_return') || $check_field('add','reasons_for_late_return') || $check_field('get','reasons_for_late_return')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								晚归原因:
							</text>
						</view>
								<!-- 多文本 -->
						<view class="diy_field diy_desc diy_text_row">
							<textarea id="form_reasons_for_late_return" v-model="form['reasons_for_late_return']" v-if="(form['reasons_for_late_return'] && $check_field('set','reasons_for_late_return')) || (!form['reasons_for_late_return'] && $check_field('add','reasons_for_late_return'))" :disabled="disabledObj['reasons_for_late_return_isDisabled']"/>
							<text v-else-if="$check_field('get','reasons_for_late_return')">{{ form['reasons_for_late_return'] }}</text>
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
			url_get_obj:"~/api/late_return_application/get_obj?",
			url_add:"~/api/late_return_application/add?",
			url_set:"~/api/late_return_application/set?",

			// 登录权限
			oauth: {
				"signIn": true,
				"user_group": []
			},

			// 查询条件
			query: {
					"student_no": 0,
						"student_name": "",
						"housemaster": 0,
						"dormitory_room_number": "",
						"late_return_time": "",
						"reasons_for_late_return": "",
					"late_return_application_id": 0
			},

			obj: {
					"student_no": 0, // 学生学号
						"student_name":  '', // 学生姓名
						"housemaster": 0, // 宿管
						"dormitory_room_number":  '', // 宿舍房号
						"late_return_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
						"reasons_for_late_return":  '', // 晚归原因
					"examine_state": "未审核",
				"examine_reply": "",
				"late_return_application_id": 0,

			},

			// 表单字段
			form: {
					"student_no": 0, // 学生学号
						"student_name":  '', // 学生姓名
						"housemaster": 0, // 宿管
						"dormitory_room_number":  '', // 宿舍房号
						"late_return_time": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
						"reasons_for_late_return":  '', // 晚归原因
					"examine_state": "未审核",
				"examine_reply": "",
				"late_return_application_id": 0,
			},
			disabledObj:{
					"student_no_isDisabled": false,
						"student_name_isDisabled": false,
						"housemaster_isDisabled": false,
						"dormitory_room_number_isDisabled": false,
						"late_return_time_isDisabled": false,
						"reasons_for_late_return_isDisabled": false,
				},

					// 用户列表
			list_user_student_no: [],
								// 用户列表
			list_user_housemaster: [],
							
			field:"late_return_application_id",
			table_key:"late_return_application",

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
		 * 获取宿管用户用户列表
		 */
		async get_list_user_housemaster() {
			// if(this.user_group !== "管理员" && this.form["housemaster"] === 0) {
			//     this.form["housemaster"] = this.user.user_id;
			// }
			var json = await this.$get("~/api/user/get_list?user_group=宿管用户");
			if(json.result && json.result.list){
				json.result.list.map((o) => this.list_user_housemaster.push({value:o.user_id,text:o.nickname + '-' + o.username}));
			}
			else if(json.error){
				console.error(json.error);
			}
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
						url: _self.$fullUrl('/api/late_return_application/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'late_return_application': 'test'
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
												if (this.form["late_return_time"] && JSON.stringify(this.form["late_return_time"]).indexOf("-")===-1) {
				this.form["late_return_time"] = this.$toTime(parseInt(this.form["late_return_time"]), "yyyy-MM-dd hh:mm:ss")
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
									this.get_list_user_housemaster();
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


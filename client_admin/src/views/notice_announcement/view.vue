<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','publisher') || $check_field('add','publisher') || $check_field('set','publisher')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="发布人" prop="publisher">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_publisher(form['publisher']) }}
							<!--<el-input id="business_name" v-model="form['publisher']" placeholder="请输入发布人"-->
							<!--v-if="user_group === '管理员' || (form['notice_announcement_id'] && $check_field('set','publisher')) || (!form['notice_announcement_id'] && $check_field('add','publisher'))" :disabled="disabledObj['publisher_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','publisher')">{{form['publisher']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['notice_announcement_id'] && $check_field('set','publisher')) || (!form['notice_announcement_id'] && $check_field('add','publisher'))" id="publisher" v-model="form['publisher']" :disabled="disabledObj['publisher_isDisabled']">
								<el-option v-for="o in list_user_publisher" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','publisher')" id="publisher" v-model="form['publisher']" :disabled="true">
								<el-option v-for="o in list_user_publisher" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="publisher" v-model="form['publisher']" :disabled="disabledObj['publisher_isDisabled']">
							<el-option v-for="o in list_user_publisher" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','title') || $check_field('add','title') || $check_field('set','title')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="标题" prop="title">
												<el-input id="title" v-model="form['title']" placeholder="请输入标题"
							  v-if="user_group === '管理员' || (form['notice_announcement_id'] && $check_field('set','title')) || (!form['notice_announcement_id'] && $check_field('add','title'))" :disabled="disabledObj['title_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','title')">{{form['title']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','release_time') || $check_field('add','release_time') || $check_field('set','release_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="发布时间" prop="release_time">
								<el-date-picker :disabled="disabledObj['release_time_isDisabled']" v-if="user_group === '管理员' || (form['notice_announcement_id'] && $check_field('set','release_time')) || (!form['notice_announcement_id'] && $check_field('add','release_time'))" id="release_time"
						v-model="form['release_time']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','release_time')">{{form['release_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','publishing_content') || $check_field('add','publishing_content') || $check_field('set','publishing_content')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="内容" prop="publishing_content">
								<el-input type="textarea" id="publishing_content" v-model="form['publishing_content']" placeholder="请输入内容"
						v-if="user_group === '管理员' || (form['notice_announcement_id'] && $check_field('set','publishing_content')) || (!form['notice_announcement_id'] && $check_field('add','publishing_content'))" :disabled="disabledObj['publishing_content_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','publishing_content')">{{form['publishing_content']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','related_images') || $check_field('add','related_images') || $check_field('set','related_images')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="相关图片" prop="related_images">
								<el-upload :disabled="disabledObj['related_images_isDisabled']" id="related_images" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_related_images"
						:show-file-list="false" v-if="user_group === '管理员' || (form['notice_announcement_id'] && $check_field('set','related_images')) || (!form['notice_announcement_id'] && $check_field('add','related_images'))">
						<img v-if="form['related_images']" :src="$fullUrl(form['related_images'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','related_images')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['related_images'])" :preview-src-list="[$fullUrl(form['related_images'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
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
				field: "notice_announcement_id",
				url_add: "~/api/notice_announcement/add?",
				url_set: "~/api/notice_announcement/set?",
				url_get_obj: "~/api/notice_announcement/get_obj?",
				url_upload: "~/api/notice_announcement/upload?",

				query: {
					"notice_announcement_id": 0,
				},

				form: {
								"publisher": 0, // 发布人
										"title":  '', // 标题
										"release_time":  '', // 发布时间
										"publishing_content":  '', // 内容
										"related_images":  '', // 相关图片
											"notice_announcement_id": 0, // ID
						
				},
				disabledObj:{
								"publisher_isDisabled": false,
										"title_isDisabled": false,
										"release_time_isDisabled": false,
										"publishing_content_isDisabled": false,
										"related_images_isDisabled": false,
										},

	
					// 用户列表
				list_user_publisher: [],
						// 用户组
				group_user_publisher: "",
				
		
		
		
	
			}
		},
		methods: {


	
	
				/**
			 * 获取辅导员用户列表
			 */
			async get_list_user_publisher() {
                // if(this.user_group !== "管理员" && this.form["publisher"] === 0) {
                //     this.form["publisher"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=辅导员");
                if(json.result && json.result.list){
                    this.list_user_publisher = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取辅导员用户组
			 */
			async get_group_user_publisher() {
							this.form["publisher"] = this.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=辅导员");
				if(json.result && json.result.obj){
					this.group_user_publisher = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_publisher(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_publisher.source_table+"/get_obj?"
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
												_this.form["publisher"] = id
									_this.disabledObj['publisher' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "publisher") {
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
					get_user_publisher(id){
				var obj = this.list_user_publisher.getObj({"user_id":id});
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
			 * 上传相关图片
			 * @param {Object} param 图片参数
			 */
			upload_related_images(param){
						this.uploadFile(param.file, "related_images");
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
						        if (this.form["release_time"].indexOf("-")===-1){
          this.form["release_time"] = this.$toTime(parseInt(this.form["release_time"]),"yyyy-MM-dd")
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


								        if(this.form["release_time"]=="0000-00-00"){
          this.form["release_time"] = null;
        }
				if(parseInt(this.form["release_time"]) > 9999){
					this.form["release_time"] = this.$toTime(parseInt(this.form["release_time"]),"yyyy-MM-dd")
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
					bl = this.$check_action('/notice_announcement/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/notice_announcement/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/notice_announcement/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/notice_announcement/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/notice_announcement/view','get');
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
					this.get_list_user_publisher();
					this.get_group_user_publisher();
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

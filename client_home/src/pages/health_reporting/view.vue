<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','student_no') || ($check_field('add','student_no') || $check_field('set','student_no'))" label="学生学号" name="student_no">
                    <uni-data-select
                  id="form_student_no"
                  v-model="form['student_no']"
                  :localdata="list_user_student_no"
                  :clear="!disabledObj['student_no_isDisabled']"
                  :disabled="disabledObj['student_no_isDisabled']"
                  v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','student_no')) || (!form['health_reporting_id'] && $check_field('add','student_no'))"
                ></uni-data-select>
                <uni-data-select
                  v-model="form['student_no']"
                  :localdata="list_user_student_no"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get','student_no')" id="student_no"
                ></uni-data-select>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','student_name') || ($check_field('add','student_name') || $check_field('set','student_name'))" label="学生姓名" name="student_name">
                            <uni-easyinput type="text" v-model="form['student_name']" v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','student_name')) || (!form['health_reporting_id'] && $check_field('add','student_name'))" :disabled="disabledObj['student_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','student_name')">
                  {{ form['student_name'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','instructor') || ($check_field('add','instructor') || $check_field('set','instructor'))" label="辅导员" name="instructor">
                    <uni-data-select
                  id="form_instructor"
                  v-model="form['instructor']"
                  :localdata="list_user_instructor"
                  :clear="!disabledObj['instructor_isDisabled']"
                  :disabled="disabledObj['instructor_isDisabled']"
                  v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','instructor')) || (!form['health_reporting_id'] && $check_field('add','instructor'))"
                ></uni-data-select>
                <uni-data-select
                  v-model="form['instructor']"
                  :localdata="list_user_instructor"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get','instructor')" id="instructor"
                ></uni-data-select>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','reporting_date') || ($check_field('add','reporting_date') || $check_field('set','reporting_date'))" label="上报日期" name="reporting_date">
                    <uni-datetime-picker v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','reporting_date')) || (!form['health_reporting_id'] && $check_field('add','reporting_date'))" v-model="form['reporting_date']" type="date" :disabled="disabledObj['reporting_date_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','reporting_date')">
                  {{ form['reporting_date'] }}
                </text>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','temperature_today') || ($check_field('add','temperature_today') || $check_field('set','temperature_today'))" label="今日体温" name="temperature_today">
                            <uni-easyinput type="text" v-model="form['temperature_today']" v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','temperature_today')) || (!form['health_reporting_id'] && $check_field('add','temperature_today'))" :disabled="disabledObj['temperature_today_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','temperature_today')">
                  {{ form['temperature_today'] }}
                </text>
                          </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','health_code') || ($check_field('add','health_code') || $check_field('set','health_code'))" label="健康码" name="health_code">
                    <!-- 修改权限 -->
                <view class="diy_field diy_img" v-if="form['health_code'] && $check_field('set','health_code')">
                  <image v-if="disabledObj['health_code_isDisabled']" :src="$fullUrl(form['health_code'])" />
                  <image v-if="!disabledObj['health_code_isDisabled']" :src="$fullUrl(form['health_code'])" @click="change_img('health_code')" />
                </view>
                <!-- 添加权限 -->
                <view class="diy_field diy_img" v-else-if="!form['health_code'] && $check_field('add','health_code')">
                  <view v-if="disabledObj['health_code_isDisabled']" class="btn_add_img">
                    <text>+</text>
                  </view>
                  <view v-if="!disabledObj['health_code_isDisabled']" class="btn_add_img" @click="change_img('health_code')">
                    <text>+</text>
                  </view>
                </view>
                <!-- 查询权限 -->
                <view class="diy_field diy_img" v-else-if="$check_field('get','health_code')">
                  <image :src="$fullUrl(form['health_code'])" />
                </view>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','is_it_uncomfortable') || ($check_field('add','is_it_uncomfortable') || $check_field('set','is_it_uncomfortable'))" label="是否不适" name="is_it_uncomfortable">
                    <uni-data-select
                  v-model="form.is_it_uncomfortable"
                  :localdata="list_is_it_uncomfortable"
                  :clear="!disabledObj['is_it_uncomfortable_isDisabled']"
                  :disabled="disabledObj['is_it_uncomfortable_isDisabled']"
                  v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','is_it_uncomfortable')) || (!form['health_reporting_id'] && $check_field('add','is_it_uncomfortable'))"
                ></uni-data-select>
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','is_it_uncomfortable')">
                  {{ form['is_it_uncomfortable'] }}
                </text>
                  </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','unwell_symptoms') || ($check_field('add','unwell_symptoms') || $check_field('set','unwell_symptoms'))" label="不适症状" name="unwell_symptoms">
                    <uni-easyinput type="textarea" v-model="form['unwell_symptoms']" v-if="user_group === '管理员' || (form['health_reporting_id'] && $check_field('set','unwell_symptoms')) || (!form['health_reporting_id'] && $check_field('add','unwell_symptoms'))" :disabled="disabledObj['unwell_symptoms_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','unwell_symptoms')">
                  {{ form['unwell_symptoms'] }}
                </text>
                  </uni-forms-item>


            </uni-forms>
            <view class="form_button">
              <button size="mini" type="primary" @click="submit()" class="primary_btn">提交</button>
              <button size="mini" @click="cancel()">取消</button>
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
                    "reporting_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
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
          list_is_it_uncomfortable: [],
                                                          }
  },
  methods: {
    changeLog(v,value){
      this.form[value] = v
    },
    /**
     * 上传文件
     * @param {Object} param文件参数
     */
    change_file(key_name){
      var _self = this;
      // 选择图像方法
      uni.chooseFile({
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
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
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
     * 上传图片
     * @param {Object} param文件参数
     */
    change_img(key_name){
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
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
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
            /**
     * 获取学生用户用户组
     */
    async get_group_user_student_no() {
      this.form["student_no"] = this.user.user_id;
      var json = await this.$get("~/api/user_group/get_obj?name=学生用户");
      if(json.result && json.result.obj){
        this.group_user_student_no = json.result.obj;
        this.get_user_session_student_no(this.form['student_no'])
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
        
            
    
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func){
                                      if (this.form["reporting_date"] && JSON.stringify(this.form["reporting_date"]).indexOf("-")===-1) {
        this.form["reporting_date"] = this.$toTime(parseInt(this.form["reporting_date"]),"yyyy-MM-dd")
      }
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

  },
  created() {
            this.get_list_user_student_no();
            this.get_group_user_student_no();
                                this.get_list_user_instructor();
                                            this.get_list_is_it_uncomfortable();
                  },
}
</script>

<style scoped>
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

.form_button{
  padding-bottom: 15px;
  display: flex;
}
.form_button button{
  width: 40%;
}
.query_select{
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

.query_option{
  width: 100%;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.form_button {
  padding-bottom: 15px;
  display: flex;
}
.form_button button {
  width: 40%;
}
.query_select {
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
  outline: none;
}

.query_option {
  width: 100%;
}

.btn_add_img {
  color: #d3d3d3;
  text-align: center;
  border: 1px solid #eee;
  height: 5rem;
  width: 5rem;
  position: relative;
}
.btn_add_img text {
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/*新样式*/
.uni-forms{
padding-top:1rem;
}
.uni-forms-item {
	padding: 6px 10px;
    background: #f8f6fc;
}
.uni-forms .is-input-border{
	border: 0;
}
.container{
	    -webkit-box-shadow: 0px 0px 0px #888888;
	    box-shadow: 0px 0px 0px #888888;
}
.form_button .primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
</style>

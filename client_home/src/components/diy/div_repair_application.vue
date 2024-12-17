<template>
	<view class="diy_details diy_div_repair_application">
		<view v-if="Object.keys(obj).length!==0" class="warp">
			<view class="container">
				<view class="row">
					<view v-if="$check_field('get','student_no')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>学生学号:</span>
						</view>
							<view class="diy_field diy_uid">
							<text>
								{{ get_user_student_no(obj['student_no']) }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','student_name')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>学生姓名:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["student_name"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','housemaster')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>宿管:</span>
						</view>
							<view class="diy_field diy_uid">
							<text>
								{{ get_user_housemaster(obj['housemaster']) }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','building_name')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>楼栋名称:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["building_name"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','dormitory_room_number')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>宿舍房号:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["dormitory_room_number"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','items_for_repair')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>报修物品:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["items_for_repair"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','repair_reason')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>报修原因:</span>
						</view>
							<view class="diy_field diy_desc">
							<text>
								{{ obj["repair_reason"] }}
							</text>
						</view>
						</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import mixin from "@/libs/mixins/component.js";
	export default {
		mixins: [mixin],
		props: {
			obj_goods: {
				type: Object,
				default(){
					return {}
				}
			},
			query:{
				type: Object,
				default(){
					return {
						repair_application_id: 0
					}
				}
			}
		},
		data() {
			return {
				obj_goods_type: {},
				obj: {},
					// 用户列表
				list_user_student_no: [],
							// 用户列表
				list_user_housemaster: [],
								}
		},
		methods: {
			async get_obj_goods_type() {
				var res = await this.$get("~/api/goods_type/get_obj", {
					name: this.obj_goods.type
				})

				if (res.result.obj) {
					this.obj_goods_type = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
			async get_obj_by_goods() {
				var {
					source_table,
					source_field
				} = this.obj_goods_type
				var {
					source_id
				} = this.obj_goods
				var query = {}
				query[source_field] = source_id
				this.$get("~/api/" + source_table + "/get_obj", {}, (res) => {
					if (res.result.obj) {
						this.obj = res.result.obj
					} else {
						console.log("没有请求到商品分类");
					}
				})
			},
			async get_obj_by_id(){
				var res = await this.$get("~/api/repair_application/get_obj", {
					repair_application_id:this.query.repair_application_id
				})

				if (res.result && res.result.obj) {
					this.obj = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
				/**
			 * 获取学生用户用户列表
			 */
			async get_list_user_student_no() {
				var json = await this.$get("~/api/user/get_list?user_group=学生用户");
				if(json.result && json.result.list){
					this.list_user_student_no = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_student_no(id){
				let obj = this.list_user_student_no;
				let ret = "";
				for(let i=0;i<obj.length;i++){
					if(obj[i].user_id==id){
						ret = obj[i].nickname+"-"+obj[i].username;
					}
				}
				return ret;
			},
						/**
			 * 获取宿管用户用户列表
			 */
			async get_list_user_housemaster() {
				var json = await this.$get("~/api/user/get_list?user_group=宿管用户");
				if(json.result && json.result.list){
					this.list_user_housemaster = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_housemaster(id){
				let obj = this.list_user_housemaster;
				let ret = "";
				for(let i=0;i<obj.length;i++){
					if(obj[i].user_id==id){
						ret = obj[i].nickname+"-"+obj[i].username;
					}
				}
				return ret;
			},
							},
		created() {
				this.get_list_user_student_no();
						this.get_list_user_housemaster();
							},
		async onLoad(){
			if (Object.keys(this.obj_goods).length !== 0) {
				await this.get_obj_goods_type();
				await this.get_obj_by_goods();
			} else if (this.query["repair_application_id"] !==0) {
				await this.get_obj_by_id();
			}
		}
	}
</script>

<style scoped>
	.div_repair_application_details {}

	.details {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
		border-bottom: 1px solid #eee;
	}

	.left_text {
		flex: 0 0 25%;
	}

	.right_text {
		flex: 0 0 75%;
	}
	.edit_nav{
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}
</style>

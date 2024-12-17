import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},


	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},



	// 友情链接路由
	// {
	// 	path: '/link/table',
	// 	name: 'link_table',
	// 	component: () => import('../views/link/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接列表'
	// 	}
	// },
	// {
	// 	path: '/link/view',
	// 	name: 'link_view',
	// 	component: () => import('../views/link/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接详情'
	// 	}
	// },

	// 轮播图路由
	{
		path: '/slides/table',
		name: 'slides_table',
		component: () => import('../views/slides/table.vue'),
		meta: {
			index: 0,
			title: '轮播图列表'
		}
	},
	{
		path: '/slides/view',
		name: 'slides_view',
		component: () => import('../views/slides/view.vue'),
		meta: {
			index: 0,
			title: '轮播图详情'
		}
	},
		// 文章路由
	{
		path: '/article/table',
		name: 'article_table',
		component: () => import('../views/article/table.vue'),
		meta: {
			index: 0,
			title: '文章列表'
		}
	},
	{
		path: '/article/view',
		name: 'article_view',
		component: () => import('../views/article/view.vue'),
		meta: {
			index: 0,
			title: '文章详情'
		}
	},

	// 文章分类路由
	{
		path: '/article_type/table',
		name: 'article_type_table',
		component: () => import('../views/article_type/table.vue'),
		meta: {
			index: 0,
			title: '文章分类列表'
		}
	},
	{
		path: '/article_type/view',
		name: 'article_type_view',
		component: () => import('../views/article_type/view.vue'),
		meta: {
			index: 0,
			title: '文章分类详情'
		}
	},
	
	// 广告路由
	// {
	// 	path: '/ad/table',
	// 	name: 'ad_table',
	// 	component: () => import('../views/ad/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告列表'
	// 	}
	// },
	// {
	// 	path: '/ad/view',
	// 	name: 'ad_view',
	// 	component: () => import('../views/ad/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告详情'
	// 	}
	// },





	// 评论路由
	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue'),
		meta: {
			index: 0,
			title: '评论列表'
		}
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue'),
		meta: {
			index: 0,
			title: '评论详情'
		}
	},

	// 学生用户路由
	{
		path: '/student_users/table',
		name: 'student_users_table',
		component: () => import('../views/student_users/table.vue'),
		meta: {
			index: 0,
			title: '学生用户列表'
		}
	},
	{
		path: '/student_users/view',
		name: 'student_users_view',
		component: () => import('../views/student_users/view.vue'),
		meta: {
			index: 0,
			title: '学生用户详情'
		}
	},
	// 宿管用户路由
	{
		path: '/housing_management_users/table',
		name: 'housing_management_users_table',
		component: () => import('../views/housing_management_users/table.vue'),
		meta: {
			index: 0,
			title: '宿管用户列表'
		}
	},
	{
		path: '/housing_management_users/view',
		name: 'housing_management_users_view',
		component: () => import('../views/housing_management_users/view.vue'),
		meta: {
			index: 0,
			title: '宿管用户详情'
		}
	},
	// 辅导员路由
	{
		path: '/instructor/table',
		name: 'instructor_table',
		component: () => import('../views/instructor/table.vue'),
		meta: {
			index: 0,
			title: '辅导员列表'
		}
	},
	{
		path: '/instructor/view',
		name: 'instructor_view',
		component: () => import('../views/instructor/view.vue'),
		meta: {
			index: 0,
			title: '辅导员详情'
		}
	},
	// 入住申请路由
	{
		path: '/check_in_application/table',
		name: 'check_in_application_table',
		component: () => import('../views/check_in_application/table.vue'),
		meta: {
			index: 0,
			title: '入住申请列表'
		}
	},
	{
		path: '/check_in_application/view',
		name: 'check_in_application_view',
		component: () => import('../views/check_in_application/view.vue'),
		meta: {
			index: 0,
			title: '入住申请详情'
		}
	},
	// 请假申请路由
	{
		path: '/leave_application/table',
		name: 'leave_application_table',
		component: () => import('../views/leave_application/table.vue'),
		meta: {
			index: 0,
			title: '请假申请列表'
		}
	},
	{
		path: '/leave_application/view',
		name: 'leave_application_view',
		component: () => import('../views/leave_application/view.vue'),
		meta: {
			index: 0,
			title: '请假申请详情'
		}
	},
	// 报修申请路由
	{
		path: '/repair_application/table',
		name: 'repair_application_table',
		component: () => import('../views/repair_application/table.vue'),
		meta: {
			index: 0,
			title: '报修申请列表'
		}
	},
	{
		path: '/repair_application/view',
		name: 'repair_application_view',
		component: () => import('../views/repair_application/view.vue'),
		meta: {
			index: 0,
			title: '报修申请详情'
		}
	},
	// 健康上报路由
	{
		path: '/health_reporting/table',
		name: 'health_reporting_table',
		component: () => import('../views/health_reporting/table.vue'),
		meta: {
			index: 0,
			title: '健康上报列表'
		}
	},
	{
		path: '/health_reporting/view',
		name: 'health_reporting_view',
		component: () => import('../views/health_reporting/view.vue'),
		meta: {
			index: 0,
			title: '健康上报详情'
		}
	},
	// 晚归申请路由
	{
		path: '/late_return_application/table',
		name: 'late_return_application_table',
		component: () => import('../views/late_return_application/table.vue'),
		meta: {
			index: 0,
			title: '晚归申请列表'
		}
	},
	{
		path: '/late_return_application/view',
		name: 'late_return_application_view',
		component: () => import('../views/late_return_application/view.vue'),
		meta: {
			index: 0,
			title: '晚归申请详情'
		}
	},
	// 留言反馈路由
	{
		path: '/message_feedback/table',
		name: 'message_feedback_table',
		component: () => import('../views/message_feedback/table.vue'),
		meta: {
			index: 0,
			title: '留言反馈列表'
		}
	},
	{
		path: '/message_feedback/view',
		name: 'message_feedback_view',
		component: () => import('../views/message_feedback/view.vue'),
		meta: {
			index: 0,
			title: '留言反馈详情'
		}
	},
	// 通知公告路由
	{
		path: '/notice_announcement/table',
		name: 'notice_announcement_table',
		component: () => import('../views/notice_announcement/table.vue'),
		meta: {
			index: 0,
			title: '通知公告列表'
		}
	},
	{
		path: '/notice_announcement/view',
		name: 'notice_announcement_view',
		component: () => import('../views/notice_announcement/view.vue'),
		meta: {
			index: 0,
			title: '通知公告详情'
		}
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "后疫情时代高校宿舍管理系统小程序-admin";
	document.title = title;
})

export default router

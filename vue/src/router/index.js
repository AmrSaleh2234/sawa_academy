import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import permissionsRoutes from "./permissions.routes";
import rolesRoutes from "./roles.routes";
import usersRoutes from "./users.routes";
import childrenRoutes from "./children.routes";
import QuestionHeadersRoutes from "./question-headers.routes";
import EvaluationsRoutes from "./evaluation.routes";
import sideProfileRoutes from "./side-profile.routes";
import calender from "./calender.routes";
import page_403 from "../views/pages/page_403.vue";
import HomeView from "../views/frontend/views/HomeView.vue";
import Login from "../views/frontend/views/Login.vue";
import About from "../views/frontend/components/About.vue";

function auth(to, from, next) {
  if (!localStorage.getItem("token")) {
    return next({ name: "Login" });
  }

  next();
}

function guest(to, from, next) {
  if (localStorage.getItem("token")) {
    return next({ name: "Home" });
  }

  next();
}

const routes = [
  ///////////////Begin Front End Users Routes //////////////////
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/SingUp",
    name: "SingUp",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/SingUp.vue"),
  },
  {
    path: "/parent/Login",
    name: "parentLogin",
    component: Login,
  },
  {
    path: "/New",
    name: "New",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/New.vue"),
  },
  {
    path: "/more",
    name: "more",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/more.vue"),
  },
  {
    path: "/ReAction",
    name: "ReAction",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/ReAction.vue"),
  },
  {
    path: "/Edit",
    name: "Edit",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/Edit.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/Profile.vue"),
  },
  {
    path: "/Following",
    name: "Following",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/Following.vue"),
  },
  {
    path: "/Number",
    name: "Number",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/Number.vue"),
  },
  {
    path: "/Booking",
    name: "Booking",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/frontend/views/Booking.vue"),
  },
  ///////////////End Front End Users Routes //////////////////

  {
    path: "/sawa-admin",
    component: Home,
    name: "Home",
    beforeEnter: auth,
    children: [
      ...Object.values(permissionsRoutes),
      ...Object.values(rolesRoutes),
      ...Object.values(usersRoutes),
      ...Object.values(childrenRoutes),
      ...Object.values(QuestionHeadersRoutes),
      ...Object.values(EvaluationsRoutes),
      ...Object.values(sideProfileRoutes),
      ...Object.values(calender),
    ],
  },
  {
    path: "/sawa-admin/login",
    name: "Login",
    beforeEnter: guest,
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: () => import("@/components/Register.vue"),
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: page_403,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/components/ForgotPassword.vue"),
  },
  {
    path: "/password-reset/:token",
    name: "ResetPassword",
    component: () => import("@/components/ResetPassword.vue"),
  },
  {
    path: "/print-child-result/:child_id/:sideProfile_id/:evaluation_id",
    name: "printChildResult",
    component: () => import("@/views/children/ChildResultPrint.vue"),
  },
  {
    path: "/ResultPrint/:child_id/:sideProfile_id",
    name: "ResultPrint",
    component: () => import("../views/children/ResultPrint.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let user_permissions = JSON.parse(localStorage.getItem("userPermissions"));
  if (to.meta.hasOwnProperty("permissions")) {
    if (
      to.meta.permissions.some((to_permission) =>
        user_permissions.includes(to_permission)
      )
    ) {
      next();
    } else {
      next({
        name: "unauthorized",
      });
    }
  } else {
    next();
  }
});

export default router;

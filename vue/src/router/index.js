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
import AboutView from "../views/frontend/views/AboutView.vue";
import BookingTime from "../views/frontend/components/BookingTime.vue";
import Cursale from "../views/frontend/components/Cursale.vue";
import code from "../views/frontend/views/code.vue";

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

function authForNormalUser(to, from, next) {
  if (!localStorage.getItem("token")) {
    return next({ name: "parentLogin" });
  }

  next();
}

function guestForNormalUser(to, from, next) {
  if (localStorage.getItem("token")) {
    return next({ name: "home" });
  }
  next();
}

const routes = [
  ///////////////Begin Front End Users Routes //////////////////
  {
    path: "/web/parent/register",
    name: "SingUp",
    component: () => import("../views/frontend/views/SingUp.vue"),
    beforeEnter: guestForNormalUser,
  },

  {
    path: "/web/parent/login",
    name: "parentLogin",
    component: Login,
    beforeEnter: guestForNormalUser,
  },
  {
    path: "/web/code",
    name: "code",
    component: code,
  },
  {
    path: "/web/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/web/booking-time",
    name: "BookingTime",
    component: BookingTime,
    beforeEnter: authForNormalUser,
  },
  {
    path: "/web/Cursale",
    name: "Cursale",
    component: Cursale,
  },

  {
    path: "/web/AboutView",
    name: "about",
    component: AboutView,
  },
  {
    path: "/web/notifications",
    name: "New",
    component: () => import("../views/frontend/views/New.vue"),
    beforeEnter: authForNormalUser,
  },
  {
    path: "/web/more/:event_id",
    name: "more",
    props: true,
    component: () => import("../views/frontend/views/more.vue"),
    beforeEnter: authForNormalUser,
  },
  {
    path: "/web/add-child",
    name: "ReAction",
    component: () => import("../views/frontend/views/ReAction.vue"),
    beforeEnter: authForNormalUser,
  },
  {
    path: "/web/evaluation",
    name: "Edit",
    component: () => import("../views/frontend/views/Edit.vue"),
    beforeEnter: authForNormalUser,
  },
  {
    path: "/web/profile",
    name: "Profile",
    component: () => import("../views/frontend/views/Profile.vue"),
    beforeEnter: authForNormalUser,
  },
  {
    path: "/web/following",
    name: "Following",
    component: () => import("../views/frontend/views/Following.vue"),
    beforeEnter: authForNormalUser,
  },
  {
    path: "/web/Number",
    name: "Number",
    component: () => import("../views/frontend/views/Number.vue"),
  },
  {
    path: "/web/appointment",
    name: "Booking",
    component: () => import("../views/frontend/views/Booking.vue"),
    beforeEnter: authForNormalUser,
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

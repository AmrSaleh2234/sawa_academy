// permissions

const Index = () => import("../views/calender/Index.vue");

const calenderRoutes = [
    {
        path: "calender",
        name: "Calender",
        component: Index,
    },

];

export default {
    ...calenderRoutes
};

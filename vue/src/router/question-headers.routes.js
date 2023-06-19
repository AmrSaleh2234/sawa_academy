// permissions

const Index = () => import("../views/QuestionHeaders/Index.vue");
const Show = () => import("../views/QuestionHeaders/Show.vue");
const Edit = () => import("../views/QuestionHeaders/Edit.vue");
const Create = () => import("../views/QuestionHeaders/Create.vue");

const headersRoutes = [
    {
        path: "headers",
        name: "Headers",
        component: Index,
    },
    // create
    {
        path: "headers/create",
        name: "CreateHeaders",
        component: Create,
    },
    // show
    {
        path: "headers/:id",
        name: "ShowHeaders",
        component: Show,
    },
    // edit
    {
        path: "headers/:id/edit",
        name: "EditHeaders",
        component: Edit,
    },
];

export default {
    ...headersRoutes,


};

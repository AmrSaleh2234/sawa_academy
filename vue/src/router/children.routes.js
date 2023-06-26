// permissions

const Index = () => import("../views/children/Index.vue");
const Show = () => import("../views/children/Show.vue");
const Edit = () => import("../views/children/Edit.vue");
const Create = () => import("../views/children/Create.vue");
const evaluation = () => import("../views/children/ChildEvaluation.vue");
const result = () => import("../views/children/ChildResult.vue");
const editResult = () => import("../views/children/evaluationResultEdit.vue");
const res = () => import("../views/children/Resultr.vue");



const childrenRoutes = [
    {
        path: "children/:alert?",
        name: "Children",
        component: Index,
    },

    // create
    {
        path: "children/create",
        name: "CreateChildren",
        component: Create,
    },
    // show
    {
        path: "children/:id",
        name: "ShowChildren",
        component: Show,
    },
    // edit
    {
        path: "children/:id/edit",
        name: "EditChildren",
        component: Edit,
    },
    {
        path: "children/Resultr/:child_id/:sideProfile_id",
        name: "resulte",
        component: res,
    },
    {
        path: "children/:child_id/:sideProfile_id",
        name: "showChildEvaluation" ,
        component: evaluation,
    },
    {
        path: "children/:child_id/:sideProfile_id/:evaluation_id",
        name: "showChildResult" ,
        component: result,
    },
    {
        path: "children/evaluation/:evaluation_result_id",
        name: "editChildResult" ,
        component: editResult,
    },
   
    

];

export default {
    ...childrenRoutes,


};

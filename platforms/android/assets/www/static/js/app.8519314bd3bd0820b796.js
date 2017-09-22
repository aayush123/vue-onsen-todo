webpackJsonp([0],[,function(t,e,a){"use strict";var n=a(0),o=a(116),i=a(44),s=a(45),c=a(46),r=a(43);n.a.use(o.a),e.a=new o.a.Store({state:c.a,getters:i.a,mutations:s.a,actions:r.a})},,,function(t,e,a){"use strict";var n=a(32),o=a(39),i=a(38),s=a(41),c=a(36),r=a(35),l=a(34),u=a(37),d=a(40),p=a(33);e.a={addTaskToState:n.a,toggleTaskStatusInState:o.a,deleteTaskInState:i.a,updateTaskInState:s.a,deleteAllCompletedTasksInState:c.a,createProjectInState:r.a,changeActiveProjectInState:l.a,deleteProjectInState:u.a,updateProjectInState:d.a,changeActiveIndexInState:p.a}},,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(1);e.a={store:n.a,install:function(t){t.prototype.$Store=n.a}}},function(t,e){},function(t,e){},function(t,e,a){function n(t){a(95)}var o=a(3)(a(58),a(110),n,"data-v-16414de3",null);t.exports=o.exports},,,function(t,e,a){"use strict";e.a=function(t,e,a){setTimeout(function(){console.log("Dummy api called, "+t.taskTitle+" added to DB for "+e+" with clientToken "+a+". Filename: AddTaskToDB.js")},5e3)}},function(t,e,a){"use strict";e.a=function(t,e,a){setTimeout(function(){console.log("Dummy api called, project "+t+" created to DB for "+e+" with clientToken "+a+". Filename: CreateProjectInDB.js")},5e3)}},function(t,e,a){"use strict";var n=a(23),o=a(29),i=a(28),s=a(31),c=a(26),r=a(24),l=a(27),u=a(30);e.a={addTaskToDB:n.a,toggleTaskStatusInDB:o.a,deleteTaskInDB:i.a,updateTaskInDB:s.a,deleteAllCompletedTasksInDB:c.a,createProjectInDB:r.a,deleteProjectInDB:l.a,updateProjectInDB:u.a}},function(t,e,a){"use strict";e.a=function(t,e){setTimeout(function(){console.log("Dummy api called, all completed tasks deleted for "+t+" with clientToken "+e+". Filename: DeleteAllCompletedTasksInDB.js")},5e3)}},function(t,e,a){"use strict";e.a=function(t,e,a){setTimeout(function(){console.log("Dummy api called, project "+t+" deleted for "+e+" with clientToken "+a+". Filename: DeleteProjectInDB.js")},5e3)}},function(t,e,a){"use strict";e.a=function(t,e,a){setTimeout(function(){console.log("Dummy api called, task "+t+" deleted for "+e+" with clientToken "+a+". Filename: DeleteTaskInDB.js")},5e3)}},function(t,e,a){"use strict";e.a=function(t,e,a){setTimeout(function(){console.log("Dummy api called, status toggled for task "+t+" for "+e+" with clientToken "+a+". Filename: ToggleTaskStatusInDB.js")},5e3)}},function(t,e,a){"use strict";e.a=function(t,e,a){var n=t.oldProjectTitle,o=t.newProjectTitle;setTimeout(function(){console.log("Dummy api called, project "+n+" renamed to "+o+" for "+e+" with clientToken "+a+". Filename: UpdateProjectInDB.js")},5e3)}},function(t,e,a){"use strict";e.a=function(t,e,a){setTimeout(function(){console.log("Dummy api called, task "+t.taskId+" updated for "+e+" with clientToken "+a+". Filename: UpdateTaskInDB.js")},5e3)}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){var e={taskId:"T"+Math.random().toString(16).slice(2),projectName:n.a.getters.activeProjectGetter,taskTitle:t,completed:!1};n.a.dispatch("addTaskAction",e)}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){n.a.commit("changeActiveIndexMutation",t)}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){n.a.commit("changeActiveProjectMutation",t)}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){n.a.dispatch("createProjectAction",t)}},function(t,e,a){"use strict";var n=a(1);e.a=function(){n.a.dispatch("deleteAllCompletedTasksAction")}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){n.a.dispatch("deleteProjectAction",t)}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){n.a.dispatch("deleteTaskAction",t)}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){n.a.dispatch("toggleTaskStatusAction",t)}},function(t,e,a){"use strict";var n=a(1);e.a=function(t,e){n.a.dispatch("updateProjectAction",{oldProjectTitle:t,newProjectTitle:e})}},function(t,e,a){"use strict";var n=a(1);e.a=function(t){n.a.dispatch("updateTaskAction",t)}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(19),o=(a.n(n),a(18)),i=(a.n(o),a(0)),s=a(21),c=a.n(s),r=a(22),l=a(20),u=a.n(l),d=a(17);i.a.use(d.a),i.a.config.productionTip=!1,i.a.use(c.a),i.a.use(r.a),new i.a({el:"#app",template:"<App/>",components:{App:u.a}})},function(t,e,a){"use strict";var n=a(25),o={addTaskAction:function(t,e){t.commit("addTaskMutation",e),n.a.addTaskToDB(e,t.getters.usernameGetter,t.getters.clientTokenGetter)},toggleTaskStatusAction:function(t,e){t.commit("toggleTaskStatusMutation",e),n.a.toggleTaskStatusInDB(e,t.getters.usernameGetter,t.getters.clientTokenGetter)},updateTaskAction:function(t,e){t.commit("updateTaskMutation",e),n.a.updateTaskInDB(e,t.getters.usernameGetter,t.getters.clientTokenGetter)},deleteTaskAction:function(t,e){t.commit("deleteTaskMutation",e),n.a.deleteTaskInDB(e,t.getters.usernameGetter,t.getters.clientTokenGetter)},deleteAllCompletedTasksAction:function(t){t.commit("deleteAllCompletedTasksMutation"),n.a.deleteAllCompletedTasksInDB(t.getters.usernameGetter,t.getters.clientTokenGetter)},createProjectAction:function(t,e){t.commit("createProjectMutation",e),n.a.createProjectInDB(e,t.getters.usernameGetter,t.getters.clientTokenGetter)},deleteProjectAction:function(t,e){t.commit("deleteProjectMutation",e),n.a.deleteProjectInDB(e,t.getters.usernameGetter,t.getters.clientTokenGetter)},updateProjectAction:function(t,e){var a=e.oldProjectTitle,o=e.newProjectTitle;t.commit("updateProjectMutation",{oldProjectTitle:a,newProjectTitle:o}),n.a.updateProjectInDB({oldProjectTitle:a,newProjectTitle:o},t.getters.usernameGetter,t.getters.clientTokenGetter)}};e.a=o},function(t,e,a){"use strict";var n={dataLoadStatus:function(t){return t.dataLoaded},activeProjectGetter:function(t){return t.activeProject},tasksForActiveProject:function(t){return function(e){var a=[];return t.tasks.forEach(function(t){t.projectName===e&&a.push(t)}),a}},usernameGetter:function(t){return t.username},clientTokenGetter:function(t){return t.clientToken},projectListGetter:function(t){return t.projects},activeIndexGetter:function(t){return t.activeIndex}};e.a=n},function(t,e,a){"use strict";var n=a(47),o=a(55),i=a(57),s=a(53),c=a(51),r=a(50),l=a(49),u=a(52),d=a(56),p=a(54),f=a(48),v={addTaskMutation:n.a,toggleTaskStatusMutation:o.a,updateTaskMutation:i.a,deleteTaskMutation:s.a,deleteAllCompletedTasksMutation:c.a,createProjectMutation:r.a,changeActiveProjectMutation:l.a,deleteProjectMutation:u.a,updateProjectMutation:d.a,hydrateState:p.a,changeActiveIndexMutation:f.a};e.a=v},function(t,e,a){"use strict";var n={activeIndex:0,dataLoaded:!1,username:"Ayush",clientToken:"DummyToken",activeProject:"",projects:[],tasks:[]};e.a=n},function(t,e,a){"use strict";var n=a(2),o=a.n(n);e.a=function(t,e){t.tasks.push(e),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";var n=a(0);e.a=function(t,e){n.a.set(t,"activeIndex",e)}},function(t,e,a){"use strict";var n=a(2),o=a.n(n),i=a(0);e.a=function(t,e){i.a.set(t,"activeProject",e),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";var n=a(2),o=a.n(n),i=a(0);e.a=function(t,e){t.projects.push(e),i.a.set(t,"activeProject",e),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";var n=a(2),o=a.n(n),i=a(0);e.a=function(t){for(var e=[],a=0;a<t.tasks.length;a+=1)t.tasks[a].completed&&t.tasks[a].projectName===t.activeProject||e.push(t.tasks[a]);i.a.set(t,"tasks",e),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";var n=a(2),o=a.n(n),i=a(0);e.a=function(t,e){var a=[],n=[];t.projects.forEach(function(t){t!==e&&a.push(t)}),t.tasks.forEach(function(t){t.projectName!==e&&n.push(t)}),i.a.set(t,"tasks",n),i.a.set(t,"projects",a),t.activeProject===e&&i.a.set(t,"activeProject",t.projects[0]),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";var n=a(0);e.a=function(t,e){for(var a=[],o=0;o<t.tasks.length;o+=1)t.tasks[o].taskId!==e&&a.push(t.tasks[o]);n.a.set(t,"tasks",a)}},function(t,e,a){"use strict";var n=a(5),o=a.n(n);e.a=function(t,e){o()(t,e)}},function(t,e,a){"use strict";var n=a(2),o=a.n(n),i=a(0);e.a=function(t,e){for(var a=[],n=0;n<t.tasks.length;n+=1)if(t.tasks[n].taskId===e){var s=t.tasks[n];s.completed=!s.completed,a.push(s)}else a.push(t.tasks[n]);i.a.set(t,"tasks",a),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";var n=a(2),o=a.n(n),i=a(5),s=a.n(i),c=a(0);e.a=function(t,e){var a=e.oldProjectTitle,n=e.newProjectTitle,i=[],r=[];t.projects.forEach(function(t){t===a?i.push(n):i.push(t)}),t.tasks.forEach(function(t){if(t.projectName===a){var e=s()({},t,{projectName:n});r.push(e)}else r.push(t)}),c.a.set(t,"tasks",r),c.a.set(t,"projects",i),t.activeProject===a&&c.a.set(t,"activeProject",n),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";var n=a(2),o=a.n(n),i=a(0);e.a=function(t,e){for(var a=[],n=0;n<t.tasks.length;n+=1)t.tasks[n].taskId===e.taskId?a.push(e):a.push(t.tasks[n]);i.a.set(t,"tasks",a),window.localStorage.setItem("todoAppData",o()(t))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(102),o=a.n(n);e.default={name:"app",components:{Layout:o.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(106),o=a.n(n),i=a(104),s=a.n(i),c=a(4);e.default={name:"layout",data:function(){return{tabsVisible:!0,tabs:[{icon:"ion-compose",label:"Tasks",page:o.a,animation:"push"},{icon:"ion-android-list",label:"Projects",page:s.a,animation:"push"}]}},components:{TasksPage:o.a,ProjectsPage:s.a},methods:{swipe:function(t){"left"===t&&0===this.activeIndex?c.a.changeActiveIndexInState(this.activeIndex+1):"right"===t&&1===this.activeIndex&&c.a.changeActiveIndexInState(this.activeIndex-1)}},computed:{activeIndex:function(){return this.$Store.getters.activeIndexGetter}},beforeCreate:function(){if("undefined"!=typeof Storage){var t=window.localStorage.getItem("todoAppData");t&&this.$Store.commit("hydrateState",JSON.parse(t))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4);e.default={name:"ProjectList",data:function(){return{projectUnderEdit:"",newProjectTitle:"",displayOptionsDialog:!1,displayEditDialog:!1}},computed:{projectList:function(){return this.$Store.getters.projectListGetter},activeProject:function(){return this.$Store.getters.activeProjectGetter}},methods:{selectProject:function(t){n.a.changeActiveIndexInState(0),n.a.changeActiveProjectInState(t)},longPress:function(t){this.projectUnderEdit=t,this.newProjectTitle=t,this.displayOptionsDialog=!0},showEditDialog:function(){this.displayOptionsDialog=!1,this.displayEditDialog=!0},deleteProject:function(){this.displayOptionsDialog=!1,n.a.deleteProjectInState(this.projectUnderEdit),this.projectUnderEdit=""},updateProject:function(){this.displayEditDialog=!1,n.a.updateProjectInState(this.projectUnderEdit,this.newProjectTitle),this.projectUnderEdit=""}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(103),o=a.n(n),i=a(4);e.default={name:"ProjectsPage",components:{ProjectList:o.a},data:function(){return{newProject:"",createProjectDialog:!1}},methods:{showCreateProjectDialog:function(){this.createProjectDialog=!0},confirmCreateProject:function(){i.a.createProjectInState(this.newProject),this.newProject=""}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(107),o=a.n(n),i=a(4);e.default={name:"TasksListTabPage",methods:{deleteAllCompletedTasks:function(){this.$ons.notification.confirm("Delete all completed tasks?").then(function(t){t&&i.a.deleteAllCompletedTasksInState()})}},computed:{activeProject:function(){return this.$Store.getters.activeProjectGetter}},components:{TodoList:o.a},props:["taskCompletedStatus","listHeader","listIcon","showDeleteAll"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(105),o=a.n(n),i=a(4);e.default={name:"TasksPage",data:function(){return{addTaskDialog:!1,newTask:"",tabs:[{label:"Active",page:o.a,active:!0,props:{taskCompletedStatus:!1,listHeader:"Active Tasks",listIcon:"ion-android-checkbox-outline-blank",showDeleteAll:!1}},{label:"Complete",page:o.a,props:{taskCompletedStatus:!0,listHeader:"Completed Tasks",listIcon:"ion-android-checkbox-outline",showDeleteAll:!0}}]}},methods:{showAddTaskDialog:function(){this.$Store.getters.projectListGetter.length>0?this.addTaskDialog=!0:this.$ons.notification.alert("Please create a project first")},confirmAddTask:function(){i.a.addTaskToState(this.newTask),this.newTask=""}},components:{TasksListPage:o.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(5),o=a.n(n),i=a(4);e.default={data:function(){return{displayOptionsDialog:!1,displayEditDialog:!1,taskUnderEdit:{}}},props:["completed","listHeader","listIcon"],computed:{activeProject:function(){return this.$Store.getters.activeProjectGetter},tasks:function(){return this.$Store.getters.tasksForActiveProject(this.activeProject)}},methods:{toggleStatus:function(t){i.a.toggleTaskStatusInState(t)},longPress:function(t){this.displayOptionsDialog=!0,this.taskUnderEdit=o()({},t)},showEditDialog:function(){this.displayOptionsDialog=!1,this.displayEditDialog=!0},deleteTask:function(){i.a.deleteTaskInState(this.taskUnderEdit.taskId),this.displayOptionsDialog=!1,this.taskUnderEdit={}},updateTask:function(){i.a.updateTaskInState(this.taskUnderEdit),this.taskUnderEdit={}}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){function n(t){a(97)}var o=a(3)(a(59),a(112),n,"data-v-5d4321c5",null);t.exports=o.exports},function(t,e,a){function n(t){a(99)}var o=a(3)(a(60),a(114),n,null,null);t.exports=o.exports},function(t,e,a){function n(t){a(94)}var o=a(3)(a(61),a(109),n,"data-v-13b4a304",null);t.exports=o.exports},function(t,e,a){function n(t){a(98)}var o=a(3)(a(62),a(113),n,"data-v-b5cbf6a0",null);t.exports=o.exports},function(t,e,a){function n(t){a(96)}var o=a(3)(a(63),a(111),n,"data-v-5033691c",null);t.exports=o.exports},function(t,e,a){function n(t){a(93)}var o=a(3)(a(64),a(108),n,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-ons-list",[a("v-ons-list-header",[t._v("\n      "+t._s(t.listHeader)+"\n    ")]),t._v(" "),t._l(t.tasks,function(e){return e.completed===t.completed?a("v-ons-list-item",{key:e.taskId,attrs:{tappable:"",ripple:"",modifier:"material"}},[a("div",{staticClass:"left",on:{click:function(a){t.toggleStatus(e.taskId)}}},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:t.listIcon}})],1),t._v(" "),a("div",{staticClass:"center",on:{hold:function(a){t.longPress(e)}}},[t._v("\n        "+t._s(e.taskTitle)+"\n      ")])]):t._e()})],2),t._v(" "),a("v-ons-alert-dialog",{attrs:{cancelable:"",visible:t.displayOptionsDialog,title:"Task Options"},on:{"update:visible":function(e){t.displayOptionsDialog=e}}},[a("v-ons-list",[a("v-ons-list-item",{attrs:{tappable:""},on:{click:t.showEditDialog}},[t._v("Edit")]),t._v(" "),a("v-ons-list-item",{attrs:{tappable:""},on:{click:t.deleteTask}},[t._v("Delete")])],1)],1),t._v(" "),a("v-ons-alert-dialog",{attrs:{cancelable:"",visible:t.displayEditDialog,modifier:"rowfooter",title:"Edit Task",footer:{Cancel:function(){t.displayEditDialog=!1,t.taskUnderEdit={}},Ok:function(){t.displayEditDialog=!1,t.updateTask()}}},on:{"update:visible":function(e){t.displayEditDialog=e}}},[a("v-ons-input",{attrs:{placeholder:"New Task",float:""},model:{value:t.taskUnderEdit.taskTitle,callback:function(e){t.taskUnderEdit.taskTitle=e},expression:"taskUnderEdit.taskTitle"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-ons-page",[a("v-ons-fab",{attrs:{position:"bottom right"},on:{click:t.showCreateProjectDialog}},[a("v-ons-icon",{attrs:{icon:"md-plus"}})],1),t._v(" "),a("ProjectList"),t._v(" "),a("v-ons-alert-dialog",{attrs:{cancelable:"",visible:t.createProjectDialog,modifier:"rowfooter",title:"Create a Project",footer:{Cancel:function(){t.createProjectDialog=!1,t.newProject=""},Ok:function(){t.createProjectDialog=!1,t.confirmCreateProject()}}},on:{"update:visible":function(e){t.createProjectDialog=e}}},[a("v-ons-input",{attrs:{placeholder:"New Project",float:""},model:{value:t.newProject,callback:function(e){t.newProject=e},expression:"newProject"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("Layout")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-ons-page",[a("v-ons-tabbar",{attrs:{tabs:t.tabs,position:"top",animation:"fade"}}),t._v(" "),a("v-ons-fab",{attrs:{position:"bottom right"},on:{click:t.showAddTaskDialog}},[a("v-ons-icon",{attrs:{icon:"md-plus"}})],1),t._v(" "),a("v-ons-alert-dialog",{attrs:{cancelable:"",visible:t.addTaskDialog,modifier:"rowfooter",title:"Add A Task",footer:{Cancel:function(){t.addTaskDialog=!1,t.newTask=""},Ok:function(){t.addTaskDialog=!1,t.confirmAddTask()}}},on:{"update:visible":function(e){t.addTaskDialog=e}}},[a("v-ons-input",{attrs:{placeholder:"New Task",float:""},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-ons-gesture-detector",{on:{swipeleft:function(e){t.swipe("left")},swiperight:function(e){t.swipe("right")}}},[a("v-ons-tabbar",{attrs:{tabs:t.tabs,visible:t.tabsVisible,index:t.activeIndex,animation:"slide"},on:{"update:index":function(e){t.activeIndex=e}}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-ons-page",[a("div",{staticClass:"projectHeader"},[a("h2",[t._v(t._s(t.activeProject))])]),t._v(" "),a("TodoList",{attrs:{listIcon:t.listIcon,completed:t.taskCompletedStatus,listHeader:t.listHeader}}),t._v(" "),t.showDeleteAll?a("v-ons-fab",{attrs:{position:"bottom left"},on:{click:t.deleteAllCompletedTasks}},[a("v-ons-icon",{attrs:{icon:"md-delete"}})],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-ons-list",[a("v-ons-list-header",[t._v("\n      Your Projects\n    ")]),t._v(" "),t._l(t.projectList,function(e){return a("v-ons-list-item",{key:e,attrs:{tappable:"",ripple:"",modifier:"material"},on:{click:function(a){t.selectProject(e)}}},[a("div",{staticClass:"left"},[a("v-ons-icon",{staticClass:"list-item__icon",attrs:{icon:e===t.activeProject?"ion-ios-circle-filled":"ion-ios-circle-outline"}})],1),t._v(" "),a("div",{staticClass:"center",on:{hold:function(a){t.longPress(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])])})],2),t._v(" "),a("v-ons-alert-dialog",{attrs:{cancelable:"",visible:t.displayOptionsDialog,title:"Project Options"},on:{"update:visible":function(e){t.displayOptionsDialog=e}}},[a("v-ons-list",[a("v-ons-list-item",{attrs:{tappable:""},on:{click:t.showEditDialog}},[t._v("Edit")]),t._v(" "),a("v-ons-list-item",{attrs:{tappable:""},on:{click:t.deleteProject}},[t._v("Delete")])],1)],1),t._v(" "),a("v-ons-alert-dialog",{attrs:{cancelable:"",visible:t.displayEditDialog,modifier:"rowfooter",title:"Edit Task",footer:{Cancel:function(){t.displayEditDialog=!1,t.projectUnderEdit="",t.newProjectTitle=""},Ok:function(){t.displayEditDialog=!1,t.updateProject()}}},on:{"update:visible":function(e){t.displayEditDialog=e}}},[a("v-ons-input",{attrs:{placeholder:"Project Title",float:""},model:{value:t.newProjectTitle,callback:function(e){t.newProjectTitle=e},expression:"newProjectTitle"}})],1)],1)},staticRenderFns:[]}},,,,function(t,e){}],[42]);
//# sourceMappingURL=app.8519314bd3bd0820b796.js.map
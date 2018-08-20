import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScrollbarModule } from 'ngx-scrollbar';


import { NavComponent } from 'src/app/share/components/nav/nav.component';
import { MaterialModule } from 'src/app/material.module';
import { LoginComponent } from 'src/app/user/components/login/login.component';
import { UserRegisterComponent } from 'src/app/user/components/user-register/user-register.component';
import { ForgetPwdComponent } from 'src/app/user/components/forget-pwd/forget-pwd.component';
import { AsideComponent } from 'src/app/share/components/aside/aside.component';
import { DashboardProjectComponent } from 'src/app/dashboard/components/dashboard-project/dashboard-project.component';
import { DashboardAnalyticsComponent } from 'src/app/dashboard/components/dashboard-analytics/dashboard-analytics.component';


import { Error404Component } from 'src/app/pages/components/error404/error404.component';
import { Error500Component } from 'src/app/pages/components/error500/error500.component';
import { FormPagesComponent } from 'src/app/pages/components/form-pages/form-pages.component';
import { ButtonPagesComponent } from 'src/app/pages/components/button-pages/button-pages.component';
import { GraphPagesComponent } from 'src/app/pages/components/graph-pages/graph-pages.component';
import { TablePagesComponent } from 'src/app/pages/components/table-pages/table-pages.component';
import { DatePagesComponent } from 'src/app/pages/components/date-pages/date-pages.component';
import { PagesComponent } from 'src/app/pages/components/pages/pages.component';


import { TodoAppComponent } from 'src/app/application/components/todo-app/todo-app.component';
import { TodoAppViewComponent } from 'src/app/application/components/todo-app/todo-app-view/todo-app-view.component';
import { TodoAppEditComponent } from 'src/app/application/components/todo-app/todo-app-edit/todo-app-edit.component';
import { AppLayoutsComponent } from 'src/app/application/components/app-layouts/app-layouts.component';
import { CanDeactivateGuard } from 'src/app/share/guards/can-deactivate-guard.service';
import { BreadcrumbComponent } from 'src/app/share/components/breadcrumb/breadcrumb.component';


import { QuizComponent } from 'src/app/application/components/quiz/quiz.component';
import { FooterComponent } from 'src/app/share/components/footer/footer.component';

const appRoutes : Routes  = [
    {
        path:'', component:LoginComponent
        
    },
    {
        path:'sign-in', component:LoginComponent,
        data: {
            breadcrumb: 'Sign-In'
        }
    },
    {
        path:'sign-up', component:UserRegisterComponent,
        data: {
            breadcrumb: 'Sign-Up'
        }
    },
    {
        path:'forget-password', component:ForgetPwdComponent,
        data: {
            breadcrumb: 'Forget-Password'
        }
    },
    {
        path:'project', component:DashboardProjectComponent,
        data: {
            breadcrumb: 'Project'
        }
    },
    {
        path:'analytics', component:DashboardAnalyticsComponent,
        data: {
            breadcrumb: 'Analytics'
        }
    },
    {
        path:'pages', component:PagesComponent,
        data: {
            breadcrumb: 'Pages'
        },
        children : [
            {
                path:'404', 
                component:Error404Component,
                data: {
                    breadcrumb: 'Error-404'
                }
            },
            {
                path:'500', 
                component:Error500Component,
                data: {
                    breadcrumb: 'Error-500'
                }
            },
            {
                path:'buttons', 
                component:ButtonPagesComponent,
                data: {
                    breadcrumb: 'Buttons'
                }
            },
            {
                path:'calanders', 
                component:DatePagesComponent,
                data: {
                    breadcrumb: 'Calanders'
                }
            },
            {
                path:'forms',
                component:FormPagesComponent,
                data: {
                    breadcrumb: 'Forms'
                }
            },
            {
                path:'graphs', 
                component:GraphPagesComponent,
                data: {
                    breadcrumb: 'Graphs'
                }
            },
            {
                path:'tables', 
                component:DatePagesComponent,
                data: {
                    breadcrumb: 'Tables Data'
                }
            }            
        ]
    },
    {
        path:'applications', component:AppLayoutsComponent,
        data: {
            breadcrumb: 'Application'
        },
        children : [
            {
                path:'todo',
                component:TodoAppComponent,
                data: {
                    breadcrumb: 'Todo-List'
                }
            },
            {
                path:'todo/add-todo', 
                component:TodoAppEditComponent, 
                canDeactivate:[CanDeactivateGuard],
                data: {
                    breadcrumb: 'Todo-Add'
                }
            },
            {
                path:'todo/edit-todo/:id/:todoCategory', 
                component:TodoAppEditComponent, 
                canDeactivate:[CanDeactivateGuard],
                data: {
                    breadcrumb: 'Todo-Edit'
                }
            },
            {
                path:'quiz',
                component:QuizComponent,
                data: {
                    breadcrumb: 'Quiz'
                }
            }
        ]
    },
    {
        path:'**',
        redirectTo:''
    }
    
]



@NgModule({
    declarations:[
        NavComponent,
        FooterComponent,
        LoginComponent,
        UserRegisterComponent,
        ForgetPwdComponent,
        AsideComponent,
        DashboardProjectComponent,
        DashboardAnalyticsComponent,

        PagesComponent,
        Error404Component,
        Error500Component,
        FormPagesComponent,
        ButtonPagesComponent,
        GraphPagesComponent,
        TablePagesComponent,
        DatePagesComponent,

        AppLayoutsComponent,
        TodoAppComponent,
        TodoAppViewComponent,
        TodoAppEditComponent,
        BreadcrumbComponent,

        QuizComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollbarModule
    ],
    exports :[
        NavComponent,
        FooterComponent,
        MaterialModule,
        FormsModule,
        AsideComponent,
        ScrollbarModule,
        BreadcrumbComponent
    ],
    providers:[
        
    ]

})


export class AppRouting {

}


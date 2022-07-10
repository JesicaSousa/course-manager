import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list.component";
import { CourseInfoComponent } from "./course-info.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarModule } from "src/app/shared/component/star/star.module";
import { AppPipeModule } from "src/app/shared/component/pipe/app.pipe.module"



@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
              },
              {
                path: 'courses/info/:id', component: CourseInfoComponent
              },
            ])
    ]
})
export class CourseModule {

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasetComponent } from './components/dataset/dataset.component';
import { ModelComponent } from './components/model/model.component';
import { AnalyticsModelComponent } from './components/analytics-model/analytics-model.component';
import { DescriptionComponent } from './components/description/description.component';
import { PredictionComponent } from './components/prediction/prediction.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'dataset', component: DatasetComponent},
  {path:'model', component: ModelComponent},
  {path:'anamodel', component: AnalyticsModelComponent},
  {path:'description', component: DescriptionComponent},
  {path:'prediction', component: PredictionComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

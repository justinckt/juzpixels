import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalComponent } from './digital/digital.component';
import { HeaderComponent } from './header/header.component';
import { PencilComponent } from './pencil/pencil.component';
import { PhotographyComponent } from './photography/photography.component';

const routes: Routes = [
  
  { path: '', component:HeaderComponent},
  { path: 'home', component:HeaderComponent},
  { path: 'photography', component:PhotographyComponent},
  { path: 'digital', component:DigitalComponent},
  { path: 'pencil', component:PencilComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

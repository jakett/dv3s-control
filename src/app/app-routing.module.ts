import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DisplayComponent }         from './body/display/display.component';
import { SettingComponent }         from './body/setting/setting.component';


const routes: Routes = [
    { path: '', redirectTo: '/display', pathMatch: 'full'},
    { path: 'display', component: DisplayComponent },
    { path: 'setting', component: SettingComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

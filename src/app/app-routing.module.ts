import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DisplayComponent }         from './components/body/display/display.component';
import { SettingComponent }         from './components/body/setting/setting.component';


const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: DisplayComponent },
    { path: 'setting', component: SettingComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MalihuScrollbarModule} from 'ngx-malihu-scrollbar';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {GlobalBarComponent} from './components/header/global-bar/global-bar.component';
import {BodyComponent} from './components/body/body.component';
import {DisplayComponent} from './components/body/display/display.component';
import {StreamsComponent} from './components/body/display/streams/streams.component';
import {PlayersComponent} from './components/body/display/players/players.component';
import {SettingComponent} from './components/body/setting/setting.component';
import {FooterComponent} from './components/footer/footer.component';

import {PanesListPopupComponent} from './components/body/display/players/panes-list-popup/panes-list-popup.component';
import {PaneComponent} from './components/body/display/players/pane/pane.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlobalBarComponent,
    BodyComponent,
    DisplayComponent,
    StreamsComponent,
    PlayersComponent,
    SettingComponent,
    FooterComponent,
    PanesListPopupComponent,
    PaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MalihuScrollbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

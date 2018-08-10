import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule }     from '@angular/common/http';

import { AppComponent }         from './app.component';
import { HeaderComponent }      from './components/header/header.component';
import { GlobalBarComponent }   from './components/header/global-bar/global-bar.component';
import { BodyComponent }        from './components/body/body.component';
import { DisplayComponent }     from './components/body/display/display.component';
import { StreamsComponent }     from './components/body/display/streams/streams.component';
import { PlayersComponent }     from './components/body/display/players/players.component';
import { SettingComponent }     from './components/body/setting/setting.component';
import { FooterComponent }      from './components/footer/footer.component';



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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

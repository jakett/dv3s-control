import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header/header.component';
import { GlobalBarComponent }   from './header/global-bar/global-bar.component';
import { BodyComponent }        from './body/body.component';
import { DisplayComponent }     from './body/display/display.component';
import { StreamsComponent }     from './body/display/streams/streams.component';
import { PlayersComponent }     from './body/display/players/players.component';
import { SettingComponent }     from './body/setting/setting.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';

import * as AngularModule from './app.submodule.angular';
import * as ComponentsModule from './app.submodule.components';
import * as ProvidersModule from './app.submodule.providers';
import * as ThirdModule from './app.submodule.thirdpart';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    ComponentsModule.AppComponent,
    ComponentsModule.UserComponent,
    ComponentsModule.LoginComponent,
    ComponentsModule.CursosComponent,
    ComponentsModule.DisciplinasComponent,
    ComponentsModule.TurmaComponent
  ],
  imports: [
    AngularModule.BrowserModule,
    AngularModule.BrowserAnimationsModule,
    AngularModule.FormsModule,
    AngularModule.ReactiveFormsModule,
    ThirdModule.MatButtonModule,
    ThirdModule.MatCardModule,
    ThirdModule.MatDialogModule,
    ThirdModule.MatIconModule,
    ThirdModule.MatInputModule,
    ThirdModule.MatMenuModule,
    ThirdModule.MatProgressSpinnerModule,
    ThirdModule.MatTableModule,
    ThirdModule.MatToolbarModule,
    AngularModule.HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProvidersModule.HttpService,
    ProvidersModule.IProvider,
  ],
  bootstrap: [ComponentsModule.AppComponent]
})
export class AppModule { }

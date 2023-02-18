//importo los servicios
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//importo todos los componentes
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadComponent } from './habilidad/habilidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';

import { PanelComponent } from './dashboard/panel/panel.component';
import { PersonaComponent } from './persona/persona.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { LogoutComponent } from './logout/logout.component';

//importo modales
import { ModalRedComponent } from './dashboard/modal-red/modal-red.component';
import { ModalPersonaComponent } from './dashboard/modal-persona/modal-persona.component';
import { ModalExperienciaComponent } from './dashboard/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './dashboard/modal-educacion/modal-educacion.component';
import { ModalHabilidadComponent } from './dashboard/modal-habilidad/modal-habilidad.component';
import { ModalProyectosComponent } from './dashboard/modal-proyectos/modal-proyectos.component';
import { ModalContactoComponent } from './dashboard/modal-contacto/modal-contacto.component';
import { ModalReferenciasComponent } from './dashboard/modal-referencias/modal-referencias.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RedesComponent,
        ExperienciaComponent,
        EducacionComponent,
        HabilidadComponent,
        ProyectoComponent,
        ContactoComponent,
        DashboardComponent,
        ErrorComponent,
        IntroComponent,
        ReferenciaComponent,
        LoginComponent,
        ServiciosComponent,
        FooterComponent,
        PanelComponent,
        PersonaComponent,
        LogoutComponent,
       
        ModalRedComponent,
        ModalPersonaComponent,
        ModalExperienciaComponent,
        ModalEducacionComponent,
        ModalHabilidadComponent,
        ModalProyectosComponent,
        ModalContactoComponent,
        ModalReferenciasComponent
        ],

        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule
          ],

    providers: [],
    bootstrap: [AppComponent],
    })
    
export class AppModule { }

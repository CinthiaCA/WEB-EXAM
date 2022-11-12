import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';



@NgModule({
  declarations: [
    
    ListadoClientesComponent,
    AltaClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports:[AltaClienteComponent, ListadoClientesComponent],
  providers: [
    ClientesService
  ]
})
export class PrimeroModule {
}


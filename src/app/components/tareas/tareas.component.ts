import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = []
  nombreTarea= '';
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    //Crear un objeto tarea
   const tarea:Tarea={
     nombre: this.nombreTarea,
     estado:false
   }
    // Agregar el objeto tarea al array;
    this.listaTareas.push(tarea);

    //Reset Form
    this.nombreTarea = '';
  }

  eliminarTarea(index : number) : void{

    this.listaTareas.splice(index,1)
  }

  actualizarTarea(tarea: Tarea, index:number):void{

    this.listaTareas[index].estado = !tarea.estado;
  }

}

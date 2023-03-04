import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from 'src/app/entidades/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-modal-red',
  templateUrl: './modal-red.component.html',
  styleUrls: ['./modal-red.component.css']
})
export class ModalRedComponent implements OnInit {
  form: FormGroup;
 redes: any;
  id?:number;
  item: Red[] = [];
  sRed: any;
  constructor(private formBuilder: FormBuilder, private redService: RedService) {
    this.form = this.formBuilder.group({
      id: [''],
      clase: ['', [Validators.required]],
      red: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.cargarRedes();
  }
// definimos el arreglo de items



  onLoadModal(item: any): void {
    
  }

  cargarRedes(): void {
    this.redService.list().subscribe(
      data => {
        this.redes = data;
      }
    );
  }

  guardar(): void {
    if (this.form.invalid) {
      return;
    }

    const red: Red = {
      id: this.form.value.id,
      clase: this.form.value.clase,
      red: this.form.value.red
    };

    if (red.id) {
      this.redService.save(red).subscribe(
        data => {
          this.cargarRedes();
          this.reset();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.redService.save(red).subscribe(
        data => {
          this.cargarRedes();
          this.reset();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
      

  borrar(id: number): void {
    if (confirm('¿Está seguro que desea eliminar este elemento?')) {
      this.redService.delete(id).subscribe(
        data => {
          this.cargarRedes();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  reset(): void {
    this.form.reset();
    this.form.get('id')?.setValue('');
  }
}

  
  
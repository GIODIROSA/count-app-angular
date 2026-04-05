import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-admin',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './event-admin.html',
  styleUrl: './event-admin.css',
})


export class EventAdmin implements OnInit {
  // Declaramos la variable del formulario
  public eventForm!: FormGroup;
  
  // Para usar el Enum en el HTML más adelante
  public categories = Object.values(EventCategory);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    /**
     * Paso 2 y 3: Estructura y Reglas
     * Cada campo tiene: [Valor inicial, [Lista de validadores]]
     */
    this.eventForm = this.fb.group({
      id: [crypto.randomUUID()], // Generamos un ID único por defecto
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required]],
      category: [EventCategory.Meeting, [Validators.required]], // Valor por defecto del Enum
      status: [EventStatus.Available] // Estado inicial por defecto
    });
  }

  /**
   * Método que se disparará desde el HTML
   */
  onSubmit(): void {
    if (this.eventForm.valid) {
      console.log('¡Misión cumplida! Datos del evento:', this.eventForm.value);
      // Aquí iría la llamada a tu servicio para guardar
    } else {
      console.error('El formulario tiene errores. Revisa los campos marcados.');
      this.eventForm.markAllAsTouched(); // Marca todos para mostrar errores en UI
    }
  }
}
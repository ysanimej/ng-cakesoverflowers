import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Cake } from '../../Interface/cake';


@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <div class="col">
      <div class="card card-body border border-0 mb-3 p-6" style="width: 21rem;">
        <img [src]="cake.photo" alt="Photo of {{ cake.photo }}" style="object-fit: fill">
        <h5 class="text-center text-secondary-emphasis mt-2">{{ cake.name }}</h5>
        <p class="text-center text-secondary-emphasis"><small>&#x20B1;{{ cake.price }}</small></p>
        <a [routerLink]="['/cake', cake.id]" type="button" class="btn btn-primary">View</a>          
      </div>
    </div>
  `,
  styleUrl: './cake.component.css'
})
export class CakeComponent {
  @Input() cake!: Cake;
}

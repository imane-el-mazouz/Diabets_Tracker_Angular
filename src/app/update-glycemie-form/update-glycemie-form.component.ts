import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../../model/glycemie';

@Component({
  selector: 'app-update-glycemie-form',
  templateUrl: './update-glycemie-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./update-glycemie-form.component.css']
})
export class UpdateGlycemieFormComponent implements OnInit {
  glycemieForm: FormGroup;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private glycemieService: GlycemieService,
    private fb: FormBuilder
  ) {
    this.glycemieForm = this.fb.group({
      value: ['', Validators.required],
      unit: ['', Validators.required],
      date: ['', Validators.required],
      mealTime: ['', Validators.required],
      source: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0;
      this.loadGlycemieDetails(this.id);
    });
  }

  loadGlycemieDetails(id: number): void {
    this.glycemieService.getGlycemie(id).subscribe({
      next: (glycemie: Glycemie) => {
        this.glycemieForm.patchValue(glycemie);
      },
      error: (error: any) => {
        console.error('Error loading glycemie details:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.glycemieForm.valid) {
      this.glycemieService.updateGlycemie(this.id, this.glycemieForm.value).subscribe({
        next: () => {
          console.log('Glycemie updated successfully.');
          this.router.navigate(['/glycemies']);
        },
        error: (error: any) => {
          console.error('Error updating glycemie:', error);
        }
      });
    }
  }
}

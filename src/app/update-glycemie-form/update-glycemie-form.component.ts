import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../../model/glycemie';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-glycemie-form',
  templateUrl: './update-glycemie-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet
  ],


  styleUrls: ['./update-glycemie-form.component.css']
})
export class UpdateGlycemieFormComponent implements OnInit {
  glycemie: Glycemie;
  glycemieForm: FormGroup;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private glycemieService: GlycemieService
  ) {
    this.glycemie = new Glycemie();
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadGlycemieDetails(this.id);
  }

  loadGlycemieDetails(id: number): void {
    this.glycemieService.getGlycemie(id).subscribe(
      (data) => {
        this.glycemie = data;
      },
      (error) => {
        console.log('Error fetching glycemie details:', error);
      }
    );
  }

  onSubmit(): void {
    this.glycemieService.updateGlycemie(this.id, this.glycemie).subscribe(
      () => {
        console.log('Glycemie updated successfully');
        this.router.navigate(['/glycemies']);
      },
      (error) => {
        console.log('Error updating glycemie:', error);
      }
    );
  }
}

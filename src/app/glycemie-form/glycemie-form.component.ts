import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../../model/glycemie';

@Component({
  selector: 'app-glycemie-form',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './glycemie-form.component.html',
  styleUrl: './glycemie-form.component.css'
})
export class GlycemieFormComponent {
  glycemie : Glycemie;


  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private glycemieService : GlycemieService
  ) {
    this.glycemie = new Glycemie();
  }


onSubmit() {
  this.glycemieService.save(this.glycemie).subscribe(result => this.gotoGlycemieList());
}

  gotoGlycemieList(){
    this.router.navigate(['/glycemies']);
  }


}

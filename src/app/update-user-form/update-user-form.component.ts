import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../../model/user';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterOutlet],
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {
  userForm: FormGroup;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadUserDetails(this.id);
  }

  loadUserDetails(id: number): void {
    this.userService.getUser(id).subscribe((data) => {
      this.userForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.id, this.userForm.value).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/apis/adminservice.service';

@Component({
  selector: 'app-makloubadmin',
  templateUrl: './makloubadmin.component.html',
  styleUrls: ['./makloubadmin.component.scss'],
})
export class MakloubadminComponent implements OnInit {
  nom: string;
  prix: number;
  preview;
  form: FormGroup;

  constructor(private admin: AdminserviceService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      prix: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }
  ajouter() {
    console.log('d');
    this.admin
      .addmakloub(
        this.form.value.nom,
        this.form.value.prix,
        this.form.value.image
      )
      .subscribe(() => {
        this.form.reset();
        this.preview = null;
      });
    console.log(this.form.value.image);
  }
  getimage(event) {
    const image = event.target.files[0];
    console.log(image);

    this.form.patchValue({ image: image });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result;
    };
    reader.readAsDataURL(image);
  }
}

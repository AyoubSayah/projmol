import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { AdminserviceService } from 'src/app/apis/adminservice.service';
@Component({
	selector: 'app-creationpizza',
	templateUrl: './creationpizza.component.html',
	styleUrls: [ './creationpizza.component.scss' ]
})
export class CreationpizzaComponent implements OnInit {
	preview;
	form: FormGroup;

	constructor(private admin: AdminserviceService) {}

	ngOnInit(): void {
		this.form = new FormGroup({
			nom: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
			prixm: new FormControl('', [ Validators.required ]),
			prixl: new FormControl('', [ Validators.required ]),
			prixxl: new FormControl('', [ Validators.required ]),
			image: new FormControl('', [ Validators.required ]),
			description: new FormControl('', [ Validators.required ])
		});
	}
	ajouter() {
		this.admin
			.addpizza(
				this.form.value.nom,
				this.form.value.prixm,
				this.form.value.prixl,
				this.form.value.prixxl,
				this.form.value.description,
				this.form.value.image
			)
			.subscribe(()=>{
        this.form.reset()
        this.preview=null
      });
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

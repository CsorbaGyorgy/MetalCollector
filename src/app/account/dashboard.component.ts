import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Band } from '../_models';
import { BandService } from '../_services'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  bands: Band[];
  bandForm: FormGroup;

  constructor(private bandService: BandService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createBandForm();
    this.getBands();
  }

  createBandForm() {
    this.bandForm = this.fb.group({
      bandName: ['', Validators.required]
    });
  }

  getBands() {
    this.bandService.getAllBands().subscribe(data => this.bands = data);
  }

  onSubmit() {
    let obj: Band = {
      name: this.bandForm.value.bandName
    }
    this.bandService.addBand(obj).subscribe(() => {
      this.getBands();
    });
    this.bandForm.reset();
    console.log(this.bandForm);
  }
}



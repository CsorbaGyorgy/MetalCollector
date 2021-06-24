import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BandService } from '../_services';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  band: any;

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBandById();
  }

  getBandById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bandService.getBandById(id).subscribe(band => {
      console.log(band);
      this.band = band;
    });
  }

   listen (): void {
    confirm("Get to know this band!")
    this.location.forward();
   
  }

  delete(bandId: Number): void {
    confirm("Are you sure want to delete this band?")
      ? this.bandService.deleteBand(bandId).subscribe(() => this.goBack())
      : ""
  }

  save(): void {
    this.bandService.updateBand(this.band).subscribe(() => this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-dcu',
  templateUrl: './dcu.component(1).html',
  styleUrls: ['./dcu.component.css']
})
export class DcuComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder) { }
  
  countries = ["Germany", "UK", "US"];
  languages = ["English", "German", "French"];
  genres = ["Adventure", "Drama", "Family", "Inedpendant"];
  crews = ["Director", "Writer", "Producer"];
  ngOnInit(): void {
  }
  dcuForm = this.formBuilder.group({
    vendor_id: ["", Validators.required],
    title: ["", Validators.required],
    sub_title: ["", Validators.required],
    studio_release_title: ["", Validators.required],
    studio_release_subtitle: [""],
    production_company: [""],
    org_country: [""],
    org_spoken_locale: [""],
    synopsis: [""],
    copyright_cline_region: [""],
    theatre_release_date: [""],
    copyright_cline: [""],
    genre_1: [""],
    genre_2:[""],
    genre_3: [""], 
    genre_4: [""],
    cast_1: [""],
    character_name_1: [""],
    cast_2: [""],
    character_name_2: [""],
    cast_3: [""],
    character_name_3: [""],
    cast_4: [""],
    character_name_4: [""],
    crew_1: [""],
    crew_1_role:[""],
    crew_2: [""],
    crew_2_role: [""],
    crew_3: [""],
    crew_3_role: [""],
    crew_4: [""],
    crew_4_role: [""],
    sd_for_sale: [false],
    hd_for_sale: [false],
    sales_start: [""],
    sd_for_vod: [true],
    hd_for_vod: [true],
    vod_start_date: [''],
    vod_stop_date:[""]
  })

  onSubmit() {
    console.log(this.dcuForm.value)
  }
}

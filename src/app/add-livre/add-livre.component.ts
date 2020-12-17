import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceListeLivreService } from '../service-liste-livre.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  lv:any={id:null,description:"",qte:0}
  constructor( private serv:ServiceListeLivreService, private route:Router) { }

  ngOnInit(): void {
  }
  Ajouter(){
    this.serv.addLivre(this.lv).subscribe(
      (data)=>{
        console.log(data);
        this.route.navigate(["/liste"])
      },
      err=>{

      }
    )

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceListeLivreService} from '../service-liste-livre.service'

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivreComponent implements OnInit {
  lv:any=[]
  
  constructor(private serv: ServiceListeLivreService,
     private route:Router,
    ) 
     { 
    this.serv.getAllLivre().subscribe(
      data=>{
        this.lv=data
      },
      err=>{
        
      }
    )
  }

  ngOnInit(): void {
  }
  Supprimer(id:number){
    this.serv.deleteLivre(id).subscribe(
      (data)=>{
        console.log(data);
        
      },
      err=>{

      }
    )

  }
  Edit(l){
    l.qte=prompt().substring(0,10);
    this.serv.updateLivre(l);
  }
}

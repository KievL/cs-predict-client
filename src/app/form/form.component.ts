import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  predicting: boolean=false
  predicted:boolean = false
  predic_error:boolean=false
  error_str!:string

  team1!:string;
  team2!:string;
  team1_logo!:string;
  team2_logo!:string;
  winner!:number;

  constructor(private api: ApiService){ }
  predict(html:string){ 
    this.predic_error=false
    this.predicting=true;
    this.predicted=false;
    this.api.postHtml(html).subscribe((response:any)=>{
      this.predicting=false
      this.predicted=true
      this.team1=response['team1']
      this.team2=response['team2']
      
      this.team1_logo=response['team1_logo']
      this.team2_logo=response['team2_logo']

      if(this.team1_logo=='/img/static/team/placeholder.svg'){
        this.team1_logo='http://hltv.org'+this.team1_logo;
      }
      if(this.team2_logo=='/img/static/team/placeholder.svg'){
        
        this.team2_logo='http://hltv.org'+this.team2_logo;
    
      }
      this.winner=response['winner']
      console.log(response)
    }, err=>{
      this.predicting=false
      this.predicted=false
      this.predic_error=true
      this.error_str=err.error['error']
    })
  }
}

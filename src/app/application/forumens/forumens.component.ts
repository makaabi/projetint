import { Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-forumens',
  templateUrl: './forumens.component.html',
  styleUrls: ['./forumens.component.css']
})
export class ForumensComponent implements OnInit{
  publications:Publication[] =[];


  recherche : string;
  constructor(private us: UserService,private fs:ForumService) { }
 
  ngOnInit()	{
    let i=0;
    this.fs.getAllPub().subscribe(
    data => {
      for(let j=0;j<data.length;j++){
       let commentaires : Commentaire[]=[];

        console.log(data[j].payload.doc.id)
        let cmntsub=this.fs.getCmnts(data[j].payload.doc.id).subscribe(
          donnee=>{      
           commentaires= donnee.map(
              cmnt=>
              new Commentaire(cmnt.payload.doc.id,cmnt.payload.doc.data()['description'],cmnt.payload.doc.data()['ownerid'])
            )
            this.publications.push(new Publication( 
              data[j].payload.doc.id,data[j].payload.doc.data()['titre'],data[j].payload.doc.data()['description'],
              data[j].payload.doc.data()['ownerid'],commentaires)) 

          }
        )
        
       
        
          i++;
      }
        
     
    })

    }
  

  

}
import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/interfaces/Document';
import {DocumentService} from 'src/app/services/document.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-documentetud',
  templateUrl: './documentetud.component.html',
  styleUrls: ['./documentetud.component.css']
})
export class DocumentetudComponent implements OnInit {
  Documents:Document[];

  constructor(private ds:DocumentService,private us: UserService) { }

  ngOnInit() {

    this.ds.getAllDocuments().subscribe(
      data => {
        this.Documents = data.map(
          element =>new Document( 
            element.payload.doc.id,
            element.payload.doc.data()['name'],
            element.payload.doc.data()['ensid'],
            element.payload.doc.data()['institut'],
            element.payload.doc.data()['branch'],
            element.payload.doc.data()['matiere'],
            element.payload.doc.data()['typed'],
            element.payload.doc.data()['dated'],
            element.payload.doc.data()['lien'],
            )
          )
          console.log(this.Documents)
      })
  }


}
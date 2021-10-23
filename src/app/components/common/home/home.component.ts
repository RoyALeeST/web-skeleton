import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private dialogConfig;
  questions: any[];

  constructor(private dialog: MatDialog, 
    private errorService: ErrorHandlerService) {
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
   }


  ngOnInit() {
  }


  handleError(error){
    console.log(error)
    this.errorService.dialogConfig = { ...this.dialogConfig };
    this.errorService.handleError(error);
  }
}

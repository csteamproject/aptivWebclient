import {
    Component,
    Input
  } from '@angular/core';
  
  import {
    NgbModal,
    ModalDismissReasons
  } from '@ng-bootstrap/ng-bootstrap';
  import {
    HttpClient,
    HttpHeaders
  } from '@angular/common/http';
  import {
    environment
  } from 'src/environments/environment.dev';
  import {
    User
  } from 'src/app/classes/user/user';
  import {
    AptivUsersTableComponent
  } from '../aptiv-users-table/aptiv-users-table.component';
  
  @Component({
    selector: 'app-delete-user-modal',
    templateUrl: './delete-user-modal.component.html',
    styleUrls: ['./delete-user-modal.component.css']
  })
  export class DeleteUserModalComponent {
  
    KeyValue = 0;
    @Input()
    // @Output() DataEvent = new EventEmitter();
    get Key(): any {
      return this.KeyValue;
    }
    set Key(data) {
      this.KeyValue = data;
    }
  
    closeResult: string;
  
    constructor(private modalService: NgbModal, private http: HttpClient, private AptivUserTblComp: AptivUsersTableComponent) {}
  
    open(content) {
      // console.log('OPEN: ', this.KeyValue);
      this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  
    Delete(Key: any) {
      console.log('KeysData: ', Key);
  
      // TODO: Move this to a separate service and have a way to make it dynamic
  
      const currentUser: User = User.Deseralize(localStorage.getItem('CurrentUser'));
      const httpOptions = {
        headers: new HttpHeaders({
          'jwt-token': currentUser.token
        })
      };
  
      this.http.delete(environment.baseURL + 'users/' + Key, httpOptions)
        .subscribe(() => {
          console.log('Success ', this.AptivUserTblComp.DataValue);
          this.AptivUserTblComp.UntouchedData = this.AptivUserTblComp.UntouchedData.filter(function (obj: any) {
            return obj.id !== Key;
          });
          this.AptivUserTblComp.BeforeFilterationData = this.AptivUserTblComp.UntouchedData;
          this.AptivUserTblComp.DataValue = this.AptivUserTblComp.UntouchedData;
          this.AptivUserTblComp.filter();
          console.log('Removed User: ', this.AptivUserTblComp.DataValue,
           this.AptivUserTblComp.BeforeFilterationData, this.AptivUserTblComp.UntouchedData);
          this.AptivUserTblComp.refreshPage();
        }, error => {
          console.log('Error');
        });
  
    }
  }
  
import {
    async,
    ComponentFixture,
    TestBed
  } from '@angular/core/testing';
  
  import {
    DeleteUserModalComponent
  } from './delete-user-modal.component';
  import {
    RouterTestingModule
  } from '@angular/router/testing';
  import {
    HttpClientModule
  } from '@angular/common/http';
  import {
    FormsModule
  } from '@angular/forms';
  import {
    AptivUsersTableComponent
  } from '../aptiv-users-table/aptiv-users-table.component';
  import {
    AddUserModalComponent
  } from '../add-user-modal/add-user-modal.component';
  /*import {
    ResetPasswordModalComponent
  } from '../reset-password-modal/reset-password-modal.component';*/
  import {
    ExcelService
  } from 'src/app/services/excel/excel.service';
  
  describe('DeleteUserModalComponent', () => {
    let component: DeleteUserModalComponent;
    let fixture: ComponentFixture < DeleteUserModalComponent > ;
  
    beforeEach(async (() => {
      TestBed.configureTestingModule({
          imports: [FormsModule,
            RouterTestingModule,
            HttpClientModule
          ],
          declarations: [DeleteUserModalComponent,
             AddUserModalComponent,
             //ResetPasswordModalComponent
            ],
          providers: [AptivUsersTableComponent, ExcelService]
        })
        .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(DeleteUserModalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
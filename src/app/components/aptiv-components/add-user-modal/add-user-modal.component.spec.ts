import {
    async,
    ComponentFixture,
    TestBed
  } from '@angular/core/testing';
  
  import {
    AddUserModalComponent
  } from './add-user-modal.component';
  import {
    FormsModule
  } from '@angular/forms';
  import {
    RouterTestingModule
  } from '@angular/router/testing';
  import {
    HttpClientModule
  } from '@angular/common/http';
  import {
    AptivUsersTableComponent
  } from '../aptiv-users-table/aptiv-users-table.component';
/*   import {
    EditUserModalComponent
  } from '../edit-user-modal/edit-user-modal.component';
  import {
    DeleteUserModalComponent
  } from '../delete-user-modal/delete-user-modal.component'; */
  import {
    ExcelService
  } from 'src/app/services/excel/excel.service';
  
  describe('AddUserModalComponent', () => {
    let component: AddUserModalComponent;
    let fixture: ComponentFixture < AddUserModalComponent > ;
  
    beforeEach(async (() => {
      TestBed.configureTestingModule({
          imports: [FormsModule,
            RouterTestingModule,
            HttpClientModule
          ],
          declarations: [AddUserModalComponent,
            AptivUsersTableComponent,
            //EditUserModalComponent,
            //DeleteUserModalComponent
          ],
          providers: [AptivUsersTableComponent, ExcelService]
        })
        .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AddUserModalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
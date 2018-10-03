import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from './user';

describe('AptivTableComponent', () => {

  it('should deserialize with static method', async(() => {
    const u = User.Deseralize({'username': 'jonathansteele', 'password': 'Appl3s12!'});
    console.log('Static deserialized user: ', u);
    expect(u.username).toEqual('jonathansteele');
  }));

  // it('should deserialize with instance method', async(() => {
  //   const u = new User();
  //   u.Deseralize({'username': 'jonathansteele', 'password': 'Appl3s12!'});
  //   console.log('Instance deserialized user: ', u);
  //   expect(u.username).toEqual('jonathansteele');
  // }));

  // TODO: Write a testcase to check and make sure all data is being passed in properly to the aptiv-table component

});

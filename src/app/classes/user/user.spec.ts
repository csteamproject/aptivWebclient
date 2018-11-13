import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from './user';

describe('AptivTableComponent', () => {

  it('should deserialize with static method', async(() => {
    const u = User.Deseralize({'first': 'Jonathan', 'last': 'Steele', 'role': '4', 'success': true, 'token': 'token1234'});
    console.log('Static deserialized user: ', u);
    expect(u.first).toEqual('Jonathan');
  }));

  it('should deserialize string.', async(() => {
    const j = '{"first": "Jonathan", "last": "Steele", "role": "4", "success": true, "token": "token1234"}';
    const u = User.Deseralize(j);
    console.log('Instance deserialized user: ', u);
    expect(u.first).toEqual('Jonathan');
  }));

  it('should deserialize from object.', async(() => {
    const j = '{"first": "Jonathan", "last": "Steele", "role": "4", "success": true, "token": "token1234"}';
    const jo = JSON.parse(j);
    const u = User.Deseralize(jo);
    console.log('Instance deserialized user: ', u);
    expect(u.first).toEqual('Jonathan');
  }));

  // TODO: Write a testcase to check and make sure all data is being passed in properly to the users component

});

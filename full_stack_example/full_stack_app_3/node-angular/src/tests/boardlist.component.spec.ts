import { DebugElement } from '@angular/core';
import { async,
  ComponentFixture,
  TestBed,
  inject } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { Http,
  BaseRequestOptions,
  Response,
  Headers,
  RequestOptions,
  ResponseOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { BoardListComponent } from '../app/boardlist.component';
import {
  IBoardSizeItem,
  IBoardType,
  IBoardListItem,
  IManufacturer
  } from '../app/IBoardList';

describe('app/tests/boardlist.component.spec.ts', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule(
      {
        declarations : [ BoardListComponent ],
        providers : [
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (
              instance: MockBackend,
              options: BaseRequestOptions
            ) => {
              return new Http(
                instance,
                options
              );
            },
            deps: [
              MockBackend,
              BaseRequestOptions
            ]
          }
        ]
      }
    )
    .compileComponents();
  }));

  it('should work with the mocked http provider',
    async(
      inject (
        [MockBackend],
        (mockBackend : MockBackend) => {
          mockBackend.connections.subscribe( (conn : any)  =>
            {
              conn.mockRespond(new Response(new ResponseOptions(
                { body: JSON.stringify(
                    [ ]
                  )}
              )));
            }
          );

          let fixture = TestBed.createComponent(BoardListComponent);
          let boardListInstance = fixture.componentInstance;
          expect(boardListInstance.manufacturerList).toBeDefined();

          }
        )
      )
  );

  it('should process a valid JSON respon',
    async(
      inject (
        [MockBackend],
        (mockBackend : MockBackend) => {
          mockBackend.connections.subscribe( (conn : any)  =>
            {
              conn.mockRespond(new Response(new ResponseOptions(
                { body: JSON.stringify(
                  [
                    {
                      manufacturer: 'test',
                      boards : [
                        { name : 'test1'},
                        { name : 'test2'}
                      ]
                    }
                  ]
                )}

              )));
            }
          );

          let fixture = TestBed.createComponent(BoardListComponent);
          let boardListInstance = fixture.componentInstance;
          expect(boardListInstance.manufacturerList.length).toBe(1);
          expect(boardListInstance.manufacturerList[0].boards.length).toBe(2);

          }
        )
      )
  );


it('should make a request after clicking the board',
  async(
    inject (
      [MockBackend],
      (mockBackend : MockBackend) => {
        mockBackend.connections.subscribe(
          (conn : any)  =>
          {
            conn.mockRespond(
              new Response(new ResponseOptions(
                { body: JSON.stringify(
                  [
                    {
                      manufacturer: 'test',
                      boards : [
                        { name : 'test1'},
                        { name : 'test2'}
                      ]
                    }
                  ]
                )}
            )));
          }
        );

        let fixture = TestBed.createComponent(BoardListComponent);
        fixture.detectChanges();
        let boardItem =
          fixture.debugElement.query(By.css('.board_panel'));

        expect(boardItem).toBeDefined();

        let eventEmitted : IBoardListItem;

        let component = fixture.componentInstance;
        component.notify.subscribe( (event: IBoardListItem) => {
          eventEmitted = event;
        });
        boardItem.triggerEventHandler('click', null);

        expect(eventEmitted).toBeDefined();
        expect(eventEmitted.name).toBe('test1');

      }
    )
  )
);

});


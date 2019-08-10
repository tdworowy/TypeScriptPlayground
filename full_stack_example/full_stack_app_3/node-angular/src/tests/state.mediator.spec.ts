import { Mediator,
  IMediatorImpl,
  StateType,
  PanelType,
  MainPanelOnly,
  MainPanelWithSideNav,
  LoginPanel } from '../app/state.mediator';

class MockMediatorImpl implements IMediatorImpl {
  showNavPanel() {}
  hideNavPanel() {}
  showDetailPanel() {}
  hideDetailPanel() {}
  changeShowHideSideButton(fromClass: string, toClass: string) {};
  showLoginPanel() {};
  hideLoginPanel() {};
}

describe('src/tests/state.mediator.spec.ts', () => {
  let mockMediatorImpl : IMediatorImpl;
  beforeEach(() => {
    mockMediatorImpl = new MockMediatorImpl();
  });

  it('Should set initial app state.', () => {
    let mediator = new Mediator(mockMediatorImpl);
    expect(mediator.getCurrentMainPanelState())
    .toBe(StateType.MainPanelWithSideNav);
  });

  it('Should call hideNavPanel', () => {
    let spy = spyOn(mockMediatorImpl, 'hideNavPanel');
    let mediator = new Mediator(mockMediatorImpl);

    mediator.moveToState(StateType.MainPanelOnly);
    expect(spy).toHaveBeenCalled();
  });

  it('Shoudl save state MainPanelState', () => {
    let mediator = new Mediator(mockMediatorImpl);
    mediator.moveToState(StateType.MainPanelOnly);
    expect(mediator.getCurrentMainPanelState())
      .toBe(StateType.MainPanelOnly);
  });

  it('Should create object LoginPanel', () => {
    let loginState = new LoginPanel();
    expect(loginState.getPanelType()).toBe(PanelType.OverlayPanel);
    expect(loginState.getStateType()).toBe(StateType.LoginPanel);
    expect(loginState.isLoginVisible()).toBe(true);
  });

  it('Should call showLoginPanel', () => {
    let spy = spyOn(mockMediatorImpl, 'showLoginPanel');
    let mediator = new Mediator(mockMediatorImpl);

    mediator.moveToState(StateType.LoginPanel);

    expect(spy).toHaveBeenCalled();
  });

});



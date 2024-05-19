class ModifyDomElement {
  setHtml() {
    let ele = $("#my_div");
    ele.html("<p>Hello World!</p>");
  }
}
describe("Test function setFixture", () => {
  it("Should modify DOM", () => {
    setFixtures("<div id='my_div'></div>");
    let modifyDom = new ModifyDomElement();
    modifyDom.setHtml();
    let modifyDomElement = $("#my_div");
    expect(modifyDomElement.length).toBeGreaterThan(0);
    expect(modifyDomElement.html()).toContain("Hello World!");
  });
});
describe("Clicking test", () => {
  it("Szhould call onclick event", () => {
    setFixtures(`
            <script>
                function handle_my_click_div_clicked() {}
            </script>
            <div id='my_click_div' onclick='handle_my_click_div_clicked()'>Click here</div>`);
    let clickEventSpy = spyOnEvent("#my_click_div", "click");
    $("#my_click_div").click();
    expect(clickEventSpy).toHaveBeenTriggered();
  });
});

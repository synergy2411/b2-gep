import { TestBed } from "@angular/core/testing"
import { MyTestComponent } from './my-test.component'

fdescribe("My Test Component : ", () => {

  TestBed.configureTestingModule({
    declarations : [MyTestComponent]
  }).compileComponents();

  it("Should create the Comp : ", () => {
    let fixture = TestBed.createComponent(MyTestComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  })

  it("Testing the Class Property", () => {
    let fixture = TestBed.createComponent(MyTestComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.user.name).toEqual("Foo");
  })

})

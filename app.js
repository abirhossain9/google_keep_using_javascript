// Write Your Javascript Code Here
class App {
  constructor() {
    this.form = document.querySelector("#form");
    this.addEventListeners();
  }
  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
    });
  }
  handleFormClick(event) {
    const isFormClicked = this.form.contains(event.target);
    if (isFormClicked) {
      //expand the form
      this.openForm();
    } else {
      //shrink the form
      this.closeForm();
    }
  }
}
new App();

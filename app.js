// Write Your Javascript Code Here
class App {
  constructor() {
    this.form = document.querySelector("#form");
    this.noteTitle = document.querySelector("#note-title");
    this.noteText = document.querySelector("#note-text");
    this.formButtons = document.querySelector("#form-buttons");
    //method
    this.addEventListeners();
  }
  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
    });
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.moteTitle.vlaue;
      const text = this.noteText.vlaue;
      const hasNote = title || text;
      if (hasNote) {
        this.addNote({ title, text });
      }
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
  openForm() {
    this.form.classList.add(".form-open");
    this.noteTitle.style.display = "block";
    this.formButtons.style.display = "block";
  }
  closeForm() {
    this.form.classList.remove(".form-open");
    this.noteTitle.style.display = "none";
    this.formButtons.style.display = "none";
  }
}
new App();

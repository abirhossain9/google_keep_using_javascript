// Write Your Javascript Code Here
class App {
  constructor() {
    //state control
    this.notes = [];
    //html elements
    this.form = document.querySelector("#form");
    this.noteTitle = document.querySelector("#note-title");
    this.noteText = document.querySelector("#note-text");
    this.notes = document.querySelector("#notes");
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

      const title = this.noteTitle.value;
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
    this.noteTitle.value = "";
    this.noteText.value = "";
  }
  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: "white",
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1,
    };
    this.notes = [...this.notes, newNote];
    //close form after adding note to the array
    this.closeForm();
  }
}
new App();

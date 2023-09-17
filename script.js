"use strict";
const createNoteBtn = document.querySelector("button");
const notesContainer = document.querySelector(".notes-container");

// Function to Import Stored Notes
const importNotes = function () {
  if (!localStorage.getItem("Notes")) return;
  notesContainer.innerHTML = localStorage.getItem("Notes");
};

// Function to Add New Note
const addNewNote = function () {
  const newNoteHtml = `<li class="note">
  <p contenteditable="true"></p><img src="./images/delete.png" class="delete-note" />
</li>`;
  notesContainer.insertAdjacentHTML("beforeend", newNoteHtml);
};

// Function to Delete a Note
const deleteNote = function (e) {
  const clicked = e.target.closest(".delete-note");
  if (!clicked) return;
  clicked.closest(".note").remove();
  saveNote();
};

// Function to Save a Note
const saveNote = function (e) {
  localStorage.setItem("Notes", notesContainer.innerHTML);
};

importNotes();

// Event Handlers

// Handling the click event to add new Note
createNoteBtn.addEventListener("click", addNewNote);

// Handling the click event to delete Note
notesContainer.addEventListener("click", deleteNote);

// Handling the input Event for Note Entries
notesContainer.addEventListener("input", saveNote);

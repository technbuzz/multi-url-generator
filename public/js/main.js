const myForm = document.forms.myForm;
myForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
  handleForm();
});

function handleForm() {
  $.ajax({
    type: 'POST',
    data: {
      url: myForm.batch.value,
      myFiles: myForm.quantity.value
    },
    url: '/generate',
    success: e => {
      console.log(e);
    }
  });
}

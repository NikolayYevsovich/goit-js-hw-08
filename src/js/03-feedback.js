import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  mailInput: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
savedFormData();

const formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  formData.email = refs.mailInput.value;
  formData.message = refs.mailInput.value;
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

function savedFormData() {
  const storageFormData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (storageFormData) {
    refs.mailInput.value = storageFormData.email;
    refs.textarea.value = storageFormData.message;
  }
}

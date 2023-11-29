import React from 'react';
import convertPhotoBase64 from '../../../common/convertFileToBase64';
import '../registration.scss';

export default function UncontrolledForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const objData = {
      username: formData.get('username'),
      age: formData.get('age'),
      email: formData.get('email'),
      password: formData.get('new-password'),
      sex: formData.get('sex'),
      rules: !!formData.get('rules'),
      photo: formData.get('photo') as File,
    };

    const base64 = await convertPhotoBase64(objData.photo);
    console.log(base64);
  };
  return (
    <main className="main">
      <h1>Uncontrolled Form</h1>
      <form className="form" onSubmit={handleSubmit} autoComplete={'on'}>
        <label htmlFor="username">
          Name
          <input name="username" id="username" />
          <div></div>
        </label>
        <label htmlFor="age">
          Age
          <input id="age" name="age" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" name="email" />
        </label>
        <label htmlFor="new-password">
          Passwords
          <input id="new-password" name="new-password" />
          Repeat passwords
          <input />
        </label>
        <label htmlFor="sex">
          Gender
          <select name="sex" id="sex">
            <option disabled></option>
            <option>Man</option>
            <option>Women</option>
          </select>
        </label>
        <label htmlFor="rules">
          Accept T&C:
          <input type="checkbox" name="rules" id="rules" />
        </label>
        <label htmlFor="photo">
          Upload picture
          <input name="photo" id="photo" type="file" accept=".jpeg, .png" />
        </label>

        <input type="submit" />
      </form>
    </main>
  );
}

import React from 'react';
import '../registration.scss';

export default function ControlledForm() {
  return (
    <main className="main">
      <h1>Controlled Form</h1>
      <form className="form">
        <label>
          Name
          <input />
          <div></div>
        </label>
        <label>
          Age
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Passwords
          <input />
          Repeat passwords
          <input />
        </label>
        <label>
          Gender
          <select name="gender" id="gender">
            <option disabled></option>
            <option value="Men">Man</option>
            <option value="Women">Women</option>
          </select>
        </label>
        <label>
          Accept T&C:
          <input type="checkbox" />
        </label>

        <input type="submit" />
      </form>
    </main>
  );
}

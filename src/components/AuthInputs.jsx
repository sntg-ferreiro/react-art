import { useState } from 'react';
import Button from './Button';
import ArtInput from './input';



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-slate-700 to-red-800'>
      <div className='flex flex-col gap-2 mb-6'>
          <ArtInput
          label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        <ArtInput label="Password" 
        type="password"
        invalid={passwordNotValid}
        onChange={(event) =>
          handleInputChange('password', event.target.value)
        }/>
       
          </div>
      <div className="flex justify-end gap-4 mb-6">
        <button type="button" className="text-amber-400 uppercase font-mono font-extrabold hover:text-slate-50">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

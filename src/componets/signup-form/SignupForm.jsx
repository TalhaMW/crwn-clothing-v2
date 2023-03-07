import { signInWithGooglePopup } from '../../utils/firebase/firebase.config';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.config';

export default function () {
  async function signInWithGoogle() {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <>
      Signup Form
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </>
  );
}

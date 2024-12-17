import { memo, useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// import { auth } from "../../../../config/firebase";
import Button from "../../ui/button/Button";

type SignUpFormProps = {
    isSignIn: boolean;
    setIsSignIn: (isSignIn: boolean) => void;
};

const SignUpForm = ({ isSignIn, setIsSignIn }: SignUpFormProps) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function onSignIn() {
        try {
            setIsLoading(true);
            // await createUserWithEmailAndPassword(auth, email, password);
            setEmail("");
            setPassword("");
        } catch (e) {
            console.log("error:", e);
        } finally {
            setIsLoading(false);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (email.trim() !== "" && password.trim() !== "") {
            onSignIn();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='signFormWrapper'>
                <h1>Sign Up</h1>
                <input
                    placeholder='Email...'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder='Password...'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='signMessage'>
                    <p
                        className='changeSign'
                        onMouseDown={() => setIsSignIn(!isSignIn)}
                    >
                        Already have an account? <span>Log in</span>
                    </p>
                </div>
            </div>
            <Button title='Sign Up' disabled={isLoading} />
        </form>
    );
};

export default memo(SignUpForm);

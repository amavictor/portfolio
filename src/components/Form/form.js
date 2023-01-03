import {useForm, ValidationError} from "@formspree/react";
import {FormBody} from "./form.styles";
import {Thanks} from "../thank you/thanks";

export const Form =()=>{
    const[state,handleSubmit] = useForm("xdojlrvq")
    if (state.succeeded) {
        return <Thanks/>;
    }

    return(
        <FormBody>
            <form onSubmit={handleSubmit}>
                <label aria-label={"email"} htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Share your idea, let's build it
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </FormBody>

    )
}


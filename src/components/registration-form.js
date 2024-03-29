import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const { username, password, fullname, email } = values;
        const user = { username, password, fullname, email };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className="lp-register__card card">
                <div className="lp-register__heading">
                    <h1 className="lp-register__heading--text">Register</h1>
                </div>
                <form
                    className="login-form lp-register__form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="fullname">Full Name</label>
                    <Field component={Input} type="text" name="fullname" />
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <label htmlFor="email">Email</label>
                    <Field
                        component={Input}
                        name="email"
                        type="email"
                        placeHolder="email@email.com"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                    />
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                    />
                    <button className="register-button lp-register__form--button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
import UserDetails from "./Forms/UserDetail";
import PersonalDetails from "./Forms/PersonalDetails";
import Success from "./Forms/Succes";
import Confirmation from "./Forms/Confirmation";
import { Component } from "react";
import BirthdateDetails from "./Forms/BirthdateDetails";
import './../chat.css';


const scrollToBottom = () => {
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 1500);
}

if (sessionStorage.savedValues === undefined) {

    const newSessionValues = {
        step: 1,
        email: '',
        tel: '',
        firstName: '',
        firstLastName: '',
        secondLastName: '',
        date: '',
    }

    sessionStorage.setItem('savedValues', JSON.stringify(newSessionValues))
}



export default class Form extends Component {

    state = {
        step: (JSON.parse(sessionStorage.savedValues)).step > 4 ? 5 : (JSON.parse(sessionStorage.savedValues)).step,
        email: (JSON.parse(sessionStorage.savedValues)).email === "undefined" ? null : `${(JSON.parse(sessionStorage.savedValues)).email}`,
        tel: (JSON.parse(sessionStorage.savedValues)).tel === "undefined" ? null : `${(JSON.parse(sessionStorage.savedValues)).tel}`,
        firstName: (JSON.parse(sessionStorage.savedValues)).firstName === "undefined" ? null : `${(JSON.parse(sessionStorage.savedValues)).firstName}`,
        firstLastName: (JSON.parse(sessionStorage.savedValues)).firstLastName === "undefined" ? null : `${(JSON.parse(sessionStorage.savedValues)).firstLastName}`,
        secondLastName: (JSON.parse(sessionStorage.savedValues)).secondLastName === "undefined" ? null : `${(JSON.parse(sessionStorage.savedValues)).secondLastName}`,
        date: (JSON.parse(sessionStorage.savedValues)).date === "undefined" ? null : `${(JSON.parse(sessionStorage.savedValues)).date}`,
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { email, tel, firstName, firstLastName, secondLastName, date } = this.state;
        const values = { email, tel, firstName, firstLastName, secondLastName, date, step }

        switch (step) {
            case 1:
                scrollToBottom()
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        handleValidation={this.handleValidation}
                    />
                )
            case 2:
                scrollToBottom()
                return (
                    <>
                        <UserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <PersonalDetails
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </>

                )
            case 3:
                scrollToBottom()
                return (

                    <>
                        <UserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <PersonalDetails
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <BirthdateDetails
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </>

                )
            case 4:
                scrollToBottom()
                return (<>
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    <PersonalDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    <BirthdateDetails
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    <Confirmation
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        values={values}
                    />
                </>

                )
            case 5:
                scrollToBottom()
                return (
                    <>
                        <UserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <PersonalDetails
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <BirthdateDetails
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        <Confirmation
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            values={values}
                        />
                        <Success values={values} />
                    </>

                )
            default:
            // do nothing
        }
    }
}
import React, { Component } from "react";
import {reports} from "../../database/database";

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export default class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            description: '',
            formErrors: {
                title: "",
                description: "",
            },
            reports: [...reports],
            array:[]
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
            title: ${this.state.title}
            description: ${this.state.description}
            `);

            let newId = 1 + this.state.reports[reports.length-1].id;

            this.state.array.push(newId, this.state.title, this.state.description,new Date().toLocaleString());
            console.log('Announcement is created');
            console.log(this.state.array)
            this.state.reports.push( this.state.array);
            console.log( this.state.reports)
            // rerender

        } else {
            console.error("FORM INVALID");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "title":
                formErrors.title =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "description":
                formErrors.description =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <p>Add new Announcement</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="title">
                            <input
                                className={formErrors.title.length > 0 ? "error" : null}
                                placeholder="title"
                                type="text"
                                name="title"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="title">title</label>
                            {formErrors.title.length > 0 && (
                                <span className="errorMessage">{formErrors.title}</span>
                            )}
                        </div>
                        <div className="description">
                            <input
                                className={formErrors.description.length > 0 ? "error" : null}
                                placeholder="description"
                                type="text"
                                name="description"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="description">description</label>
                            {formErrors.description.length > 0 && (
                                <span className="errorMessage">{formErrors.description}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// Import
import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";
import signup from "./signup.css";

export class Signup extends React.Component {
  
  state = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    cpassword: "",
    administration: "no"
  };

  send = async () => {
    const { email, password, cpassword, nom, prenom, administration } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    if (!administration || administration.length === 0 || !nom || nom.length === 0 || !prenom || prenom.length === 0 || !administration) return;
    try {
      const { data } = await API.signup({ email, password, nom, prenom, administration });
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { email, password, cpassword, nom, prenom } = this.state;
    return (
      <div className="Login">
        <FormGroup controlId="nom" >
          <ControlLabel>Nom</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={nom}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="prenom" >
          <ControlLabel>Prenom</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={prenom}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" >
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="cpassword" >
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="administration" >
            <label htmlFor="radioButtonSet">Faites-vous partie de l'administration ?</label>
            <div>
              <input type="radio" name="radioButtonSet" value='yes' id="administration" onChange={this.handleChange}/>
              <label id="administration" htmlFor="administration">Oui</label>
              <input type="radio" name="radioButtonSet" value='no' id="administration" defaultChecked onChange={this.handleChange}/>
              <label id="administration" htmlFor="administration">Non</label>
            </div>
        </FormGroup>
        <Button onClick={this.send} block  type="submit">
          Inscription
        </Button>
      </div>
    );
  }
}
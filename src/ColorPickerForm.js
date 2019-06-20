import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: ""
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor(newColor) {
    this.setState({
      currentColor: newColor.hex
    });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
		this.props.addNewColor(newColor);
		this.setState({newColorName:""})
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
						className={classes.colorNameInput}
						placeholder="Color Name..."
            name="newColorName"
						variant="filled"
						margin="normal"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "This field is required",
              "Color Name Must Be Unique",
              "Color Already Used"
            ]}
          />
          <Button
					className={classes.addColor}
            variant="contained"
            color="primary"
            type="submit"
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor
            }}
          >
            {paletteIsFull ? "Palette Full" : "ADD COLOR"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);

require("./vendor.js");
import css from "./style.scss";
import _ from "lodash";
import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { CalculatorService } from "./app/calculator.service";
import { JokesService } from "./app/jokes.service";

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);
console.log(_.toUpper("Hello, World! from index.js"));
